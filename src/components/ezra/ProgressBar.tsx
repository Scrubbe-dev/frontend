interface ProgressBarProps {
  value: number;
  color: string;
}

const ProgressBar = ({ value, color }: ProgressBarProps) => (
  <div className="w-full h-1.5 bg-gray-700 rounded">
    <div className={`h-1.5 rounded ${color}`} style={{ width: `${value}%` }} />
  </div>
);

export default ProgressBar;
