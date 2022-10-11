import TimerContainer from "./timerContainer";

export default function TimerList() {
  const numberOfTimers: number[] = [1, 2, 3];

  const timerList = numberOfTimers.map((timer) => <TimerContainer key={timer} />);
  return <div>{timerList};</div>;
}
