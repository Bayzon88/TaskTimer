export default function SideButtons({ selectTimerType }: any) {
  return (
    <span className='timer__container--selection'>
      <button onClick={(e) => selectTimerType(e)}>Pomodoro</button>
      <button onClick={(e) => selectTimerType(e)}>Break</button>
      <button onClick={(e) => selectTimerType(e)}>Long-Break</button>
    </span>
  );
}
