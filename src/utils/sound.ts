/**
 * Web Audio API 기반 교육용 게임 사운드 & 배경음악 엔진
 * 외부 오디오 파일 의존성 없이 브라우저에서 즉시 맑고 경쾌한 소리를 생성합니다.
 */
class SoundEngine {
  private ctx: AudioContext | null = null;
  private soundEnabled = true;
  private bgmEnabled = true;
  private bgmTimer: number | null = null;
  private bgmStep = 0;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {
        // Ignore autoplay resume errors until user gesture
      });
    }
    return this.ctx;
  }

  public unlock(): void {
    const ctx = this.getContext();
    if (ctx && this.bgmEnabled && this.bgmTimer === null) {
      this.startBgmLoop();
    }
  }

  public setSoundEnabled(enabled: boolean): void {
    this.soundEnabled = enabled;
  }

  public setBgmEnabled(enabled: boolean): void {
    this.bgmEnabled = enabled;
    if (enabled) {
      this.startBgmLoop();
    } else {
      this.stopBgmLoop();
    }
  }

  private playTone(
    freq: number,
    duration: number,
    type: OscillatorType = 'sine',
    volume = 0.14,
    delay = 0
  ): void {
    if (!this.soundEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  /** 카드 선택: 가벼운 목금/마림바 클릭음 */
  public playSelect(): void {
    this.unlock();
    this.playTone(587.33, 0.08, 'triangle', 0.14, 0); // D5
    this.playTone(880, 0.06, 'sine', 0.08, 0.02); // A5
  }

  /** 정답: 밝고 경쾌한 성공 화음 */
  public playMatch(): void {
    this.unlock();
    this.playTone(523.25, 0.14, 'triangle', 0.16, 0); // C5
    this.playTone(659.25, 0.14, 'triangle', 0.16, 0.08); // E5
    this.playTone(783.99, 0.24, 'sine', 0.18, 0.16); // G5
  }

  /** 콤보 달성: 반짝이는 상승 아르페지오 */
  public playCombo(comboCount: number): void {
    this.unlock();
    const base = Math.min(comboCount, 6);
    const notes = [523.25, 659.25, 783.99, 1046.5, 1174.66, 1318.51];
    for (let i = 0; i < Math.min(notes.length, 3 + Math.floor(base / 2)); i++) {
      this.playTone(notes[i], 0.16, 'sine', 0.15, i * 0.06);
    }
  }

  /** 오답: 부드럽고 따뜻한 안내음 (날카롭지 않게) */
  public playMismatch(): void {
    this.unlock();
    this.playTone(329.63, 0.14, 'sine', 0.12, 0); // E4
    this.playTone(261.63, 0.2, 'sine', 0.12, 0.12); // C4
  }

  /** 스테이지 클리어: 축하 팡파르 */
  public playFanfare(): void {
    this.unlock();
    const melody = [
      { f: 523.25, d: 0.13, t: 0 },     // C5
      { f: 659.25, d: 0.13, t: 0.11 },  // E5
      { f: 783.99, d: 0.13, t: 0.22 },  // G5
      { f: 1046.5, d: 0.35, t: 0.34 },  // C6
      { f: 783.99, d: 0.12, t: 0.56 },  // G5
      { f: 1046.5, d: 0.45, t: 0.68 },  // C6
    ];
    melody.forEach((n) => {
      this.playTone(n.f, n.d, 'triangle', 0.18, n.t);
    });
  }

  /** 버튼 클릭/구매 효과음 */
  public playPurchase(): void {
    this.unlock();
    this.playTone(659.25, 0.1, 'sine', 0.14, 0);
    this.playTone(987.77, 0.22, 'triangle', 0.16, 0.08);
  }

  /** 한글 낱말 읽어주기 (지원 브라우저에서 부드럽게) */
  public speakWord(word: string): void {
    if (!this.soundEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }
    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(word);
      utter.lang = 'ko-KR';
      utter.rate = 0.88;
      utter.pitch = 1.1;
      utter.volume = 0.85;
      window.speechSynthesis.speak(utter);
    } catch {
      // Speech synthesis not supported or blocked
    }
  }

  /** 밝고 경쾌한 배경음악 루프 (오르골/실로폰 풍 펜타토닉 멜로디) */
  private startBgmLoop(): void {
    if (this.bgmTimer !== null || !this.bgmEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    // Cheerful C-major pentatonic kids melody (C5, D5, E5, G5, A5, C6)
    const melody: (number | null)[] = [
      523.25, 659.25, 783.99, 659.25,
      880.0, 783.99, 659.25, null,
      587.33, 659.25, 783.99, 880.0,
      783.99, 659.25, 523.25, null,
      659.25, 783.99, 1046.5, 880.0,
      783.99, 659.25, 587.33, null,
      523.25, 587.33, 659.25, 783.99,
      659.25, 587.33, 523.25, null,
    ];

    this.bgmTimer = window.setInterval(() => {
      if (!this.bgmEnabled) return;
      const audioCtx = this.getContext();
      if (!audioCtx || audioCtx.state !== 'running') return;

      const freq = melody[this.bgmStep % melody.length];
      this.bgmStep = (this.bgmStep + 1) % melody.length;

      if (freq) {
        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.032, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.34);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.36);
      }
    }, 380);
  }

  public stopBgmLoop(): void {
    if (this.bgmTimer !== null) {
      window.clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }
}

export const soundEngine = new SoundEngine();
