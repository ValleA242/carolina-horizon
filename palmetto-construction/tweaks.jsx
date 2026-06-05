/* Palmetto Tweaks — applies design knobs to <html> data-attributes */
const PALMETTO_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "overlay": "box",
  "headingFont": "condensed",
  "goldAccent": "medium",
  "texture": "on"
}/*EDITMODE-END*/;

function PalmettoTweaks() {
  const [t, setTweak] = useTweaks(PALMETTO_TWEAK_DEFAULTS);

  React.useEffect(() => {
    const r = document.documentElement;
    r.setAttribute("data-overlay", t.overlay);
    r.setAttribute("data-font", t.headingFont);
    r.setAttribute("data-gold", t.goldAccent);
    r.setAttribute("data-texture", t.texture);
  }, [t.overlay, t.headingFont, t.goldAccent, t.texture]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Typography" />
      <TweakRadio
        label="Heading font"
        value={t.headingFont}
        options={[{ label: "Condensed", value: "condensed" }, { label: "Slab", value: "slab" }]}
        onChange={(v) => setTweak("headingFont", v)}
      />
      <TweakSection label="Hero" />
      <TweakRadio
        label="Overlay card"
        value={t.overlay}
        options={[{ label: "Navy", value: "box" }, { label: "Brick", value: "brick" }]}
        onChange={(v) => setTweak("overlay", v)}
      />
      <TweakSection label="Accents & Texture" />
      <TweakRadio
        label="Gold accent"
        value={t.goldAccent}
        options={[{ label: "Low", value: "low" }, { label: "Med", value: "medium" }, { label: "High", value: "high" }]}
        onChange={(v) => setTweak("goldAccent", v)}
      />
      <TweakToggle
        label="Weathered texture"
        value={t.texture === "on"}
        onChange={(v) => setTweak("texture", v ? "on" : "off")}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<PalmettoTweaks />);
