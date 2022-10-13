export default function SideButtons({ selectStage }: any) {
  return (
    <span className='timer__container--selection'>
      <button onClick={(e) => selectStage(e)}>Pomodoro</button>
      <button onClick={(e) => selectStage(e)}>Break</button>
      <button onClick={(e) => selectStage(e)}>Long-Break</button>
    </span>
  );
}
