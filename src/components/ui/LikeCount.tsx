import ArrowUp from '../../assets/shared/icon-arrow-up.svg'

export default function LikeCount() {
  return (
    <button className="h-[53px] w-10 bg-eggshell rounded-md flex items-center justify-center flex-col gap-1 hover:bg-[#CFD7FF] transition-colors">
        <img src={ArrowUp} alt="" />
        <span className="text-body-s font-bold">99</span>
    </button>
  )
}
