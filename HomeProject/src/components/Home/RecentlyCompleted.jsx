import { ReducerType } from "@reduxjs/toolkit"
import style from "../Home/RecentlyCompleted.module.css"
const RecentlyCompleted = () => {
  return (
    <section className={`${style.sectionFive} container`}>
      <div className={style.head} >
        <p className={style.subHeading}>Recently Completed</p>
        <h2 className={style.heading}>Explore Projects</h2>
      </div>

      <div className={style.projectImg}>
        <img src="/images/project-1.png" />
        <img src="/images/project-2.png" />
        <img src="/images/project-3.png" />
        <img src="/images/project-4.png" />
      </div>
    </section>
  )
}
export default RecentlyCompleted;