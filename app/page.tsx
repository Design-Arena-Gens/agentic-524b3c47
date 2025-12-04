export default function Page() {
  return (
    <div className="grid">
      <header className="card">
        <span className="kicker">Phase 7</span>
        <h1 className="title">Contingency Planning</h1>
        <p className="subtitle">
          What to do if tools fail ? alternative approaches, how to salvage partial
          failures, and when to ask for community help.
        </p>

        <div className="badges">
          <span className="badge">
            <span className="dot" /> Free-first mindset
          </span>
          <span className="badge">
            <span className="dot" /> Story over perfection
          </span>
          <span className="badge">
            <span className="dot" /> Time-aware decisions
          </span>
          <span className="badge">
            <span className="dot" /> Hybrid workflows
          </span>
        </div>
      </header>

      <section className="card">
        <h2 className="section-title">Key Principles You Follow</h2>
        <div className="columns">
          <div>
            <h3>1. Consistency is Hard</h3>
            <ul className="list">
              <li>Acknowledge limits of pure AI for image consistency.</li>
              <li>Use multiple strategies: reference boards, seed locking, ControlNet, LoRA, IP-Adapter.</li>
              <li>Expect drift across shots; plan manual touch-ups.</li>
              <li>Hybrid approach: AI for bulk, manual for hero frames.</li>
            </ul>
            <div className="callout muted">
              Tip: Create a <code className="inline">style bible</code> with color palette, camera rules, and character traits.
            </div>
          </div>
          <div>
            <h3>2. Time is Precious</h3>
            <ul className="list">
              <li>Prioritize shots that matter most to the story.</li>
              <li>Offer Fast Track vs. Quality Track paths.</li>
              <li>Batch process wherever possible.</li>
              <li>Cut or reuse when deadlines loom.</li>
            </ul>
            <div className="callout muted">
              Rule of thumb: If a shot is on screen &lt; 2s, optimize for speed.
            </div>
          </div>
        </div>
        <div className="columns" style={{ marginTop: 12 }}>
          <div>
            <h3>3. Free Tools First</h3>
            <ul className="list">
              <li>Prefer free Stable Diffusion UIs and open models.</li>
              <li>Work around free-tier limits via batching and off-peak queues.</li>
              <li>Switch tools quickly if a pipeline jams.</li>
              <li>Note paid upgrades only as optional accelerators.</li>
            </ul>
            <div className="callout muted">
              Keep a <span className="kbd">Plan B</span> list: one-click swaps for each critical step.
            </div>
          </div>
          <div>
            <h3>4. Story Over Perfection</h3>
            <ul className="list">
              <li>Emotion and clarity beat pixel-perfect continuity.</li>
              <li>Polish the beats that carry meaning.</li>
              <li>Use framing, sound, and pacing to sell the moment.</li>
              <li>Let minor continuity errors slide when impact is high.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">When Tools Fail: Immediate Triage</h2>
        <div className="columns">
          <div>
            <h3>Check the Basics</h3>
            <ul className="list">
              <li>Rollback the last change; retry with the prior known-good setting.</li>
              <li>Reduce complexity: smaller resolution, fewer steps, lighter model.</li>
              <li>Swap to a minimal prompt to verify the engine works.</li>
              <li>Clear caches and restart the session/instance.</li>
            </ul>
          </div>
          <div>
            <h3>Fast Alternatives</h3>
            <ul className="list">
              <li>Switch model family (SDXL ? SD 1.5) keeping reference images.</li>
              <li>Use IP-Adapter/ControlNet to recover pose and style.</li>
              <li>Fallback to image-to-image with higher denoise for rescue.</li>
              <li>Composite passes: background pass + subject pass + grade.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Salvage Strategies (Partial Failures)</h2>
        <div className="columns">
          <div>
            <h3>Images</h3>
            <ul className="list">
              <li>Keep the best face/hands; patch using inpaint.</li>
              <li>Lock seeds per character; iterate lighting only.</li>
              <li>Grade mismatched frames to a unified look.</li>
              <li>Snap to storyboard silhouettes to preserve readability.</li>
            </ul>
          </div>
          <div>
            <h3>Video</h3>
            <ul className="list">
              <li>Stabilize, re-time, or cut on action to hide artifacts.</li>
              <li>Replace only keyframes and motion-interp the in-betweens.</li>
              <li>Use masks to protect stable regions; re-gen unstable areas.</li>
              <li>Foley and music can rescue borderline visuals.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Fast Track vs. Quality Track</h2>
        <div className="columns">
          <div>
            <h3>Fast Track (deadline-driven)</h3>
            <ul className="list">
              <li>Lower resolution, fewer steps, tighter prompts.</li>
              <li>Use existing shots; cut to reaction shots.</li>
              <li>Favor strong sound design; reduce screen time.</li>
              <li>Batch overnight jobs; review in the morning.</li>
            </ul>
          </div>
          <div>
            <h3>Quality Track (time available)</h3>
            <ul className="list">
              <li>Refine style bible; lock palettes and lenses.</li>
              <li>Train light LoRAs for recurring characters.</li>
              <li>Manual paint-over on hero frames.</li>
              <li>Iterate with A/B seeds; keep top 10 only.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Free-First Alternatives (with Workarounds)</h2>
        <ul className="list">
          <li>
            Generation: SD WebUI, ComfyUI. Workaround: run at off-peak; use low VRAM modes.
          </li>
          <li>
            Consistency: ControlNet, IP-Adapter, OpenPose. Workaround: cache poses and reuse.
          </li>
          <li>
            Editing: Krita, GIMP, DaVinci Resolve (free). Workaround: proxy media for speed.
          </li>
          <li>
            Collab: Google Drive, Notion, Figma free tiers. Workaround: export to reduce quotas.
          </li>
        </ul>
        <div className="callout">
          If budget allows: consider paid cloud queues, commercial upscalers, or render farms for crunch weeks.
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">When to Ask for Community Help</h2>
        <ul className="list">
          <li>You're blocked &gt; 60 minutes after two alternative attempts.</li>
          <li>Bug is reproducible with a minimal prompt/config.</li>
          <li>Hardware/driver errors persist across restarts.</li>
          <li>Model outputs regress after a version update.</li>
        </ul>
        <p className="muted">
          Prepare a reproducible snippet, list of attempts, and 1-2 screenshots. Ask specific
          questions; share seeds and settings.
        </p>
      </section>

      <section className="card">
        <h2 className="section-title">Batching and Tool-Switching</h2>
        <ul className="list">
          <li>Queue shots by location/lighting to reuse shaders and grades.</li>
          <li>Switch models based on failure type (anatomy vs. environment).</li>
          <li>Keep a per-scene seed table; log wins/losses.</li>
          <li>Automate renaming and metadata embedding for traceability.</li>
        </ul>
        <a
          className="cta"
          href="https://www.markdownguide.org/cheat-sheet/"
          target="_blank"
          rel="noreferrer"
        >
          Download the 1-page checklist
          <span aria-hidden>?</span>
        </a>
      </section>
    </div>
  );
}
