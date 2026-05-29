interface Props {
  value: number;
  vertical?: boolean;
}

const DEVICE_LABELS = ['Ring', 'Ring', 'Speaker', 'Speaker', 'Traffic', 'Traffic', 'Flock', 'Flock'];
const DEVICE_EMOJIS = ['📷', '📷', '🔊', '🔊', '🚦', '🚦', '🚗', '🚗'];

export default function DensityTracker({ value, vertical }: Props) {
  if (vertical) {
    return (
      <div className="density-tracker-v">
        <div className="density-v-title">Density</div>
        <div className="density-v-level">L{value}</div>
        <div className="density-v-track">
          {DEVICE_LABELS.map((label, i) => (
            <div
              key={i}
              className={`density-step-v ${i + 1 === value ? 'current' : i + 1 < value ? 'passed' : ''}`}
              title={`Level ${i + 1}: ${label}`}
            >
              <span>{DEVICE_EMOJIS[i]}</span>
              <span className="density-v-num">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="density-tracker">
      <div className="density-header">
        <span className="density-title">Surveillance Density Tracker</span>
        <span className="density-value">Level {value}</span>
      </div>
      <div className="density-track">
        {DEVICE_LABELS.map((label, i) => (
          <div
            key={i}
            className={`density-step ${i + 1 === value ? 'current' : i + 1 < value ? 'passed' : ''}`}
          >
            <span className="density-emoji">{DEVICE_EMOJIS[i]}</span>
            <span className="density-label">{label}</span>
            <span className="density-num">{i + 1}</span>
          </div>
        ))}
      </div>
      <div className="density-info">
        Current device: <strong>{DEVICE_EMOJIS[value - 1]} {DEVICE_LABELS[value - 1]}</strong>
        {' '}(meter shift: {value <= 2 ? '-1' : value <= 4 ? '-1' : value <= 6 ? '-2' : '-3'} when placed)
      </div>
    </div>
  );
}
