export interface MainPanelProps {
  onBetClick: (type: string, size: number, value?: string) => void;
  onBetSizeChange: (size: number) => void;
}
