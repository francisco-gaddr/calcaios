export interface StepProps {
  onNext: () => void;
  onBack?: () => void;
  onSkip: () => void;
}
