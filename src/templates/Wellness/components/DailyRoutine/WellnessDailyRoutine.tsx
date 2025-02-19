import { wellnessRoutineList } from "../../../../data/wellnessData";
import styles from "./WellnessDailyRoutine.module.scss";
import * as FaIcons from "react-icons/fa";

const WellnessRoutine = () => {
  const getTopRightClass = (data: string) => {
    if (data) {
      const arr = data.split(":");
      const time = Number(arr[0]) * 60 + Number(arr[1]) - 420;
      const percentage = Math.ceil((time / 720) * 100);

      if (percentage > 100) return 100;
      return percentage;
    }

    return "";
  };

  const getTopLeftClass = (data: string) => {
    if (data) {
      const arr = data.split(":");
      const time = Number(arr[0]) * 60 + Number(arr[1]) - 420;
      if (time < 720) return 0;
      const percentage = Math.ceil((time / 1440) * 100 - 50);
      return percentage;
    }

    return "";
  };

  return (
    <section className={styles["wellness-routine"]}>
      <div className={styles["wellness-routine__container"]}>
        <h1>Daily Routine</h1>
        <h4>Wake Up at 07:00</h4>

        <ul className={styles["wellness-routine__container_ul"]}>
          {wellnessRoutineList.map((routine) => {
            const IconComponent = FaIcons[routine.icon as keyof typeof FaIcons];
            return (
              <li
                className={styles["wellness-routine__container_ul_li"]}
                key={routine.id}
              >
                <div
                  className={styles["wellness-routine__container_ul_li_img"]}
                  style={
                    {
                      "--dynamic-topRight": `${getTopRightClass(
                        routine.time
                      )}%`,
                      "--dynamic-topLeft": `-${getTopLeftClass(routine.time)}%`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className={
                      styles["wellness-routine__container_ul_li_img_circle"]
                    }
                  >
                    <span>{routine.time}</span>
                  </div>
                </div>
                <div
                  className={styles["wellness-routine__container_ul_li_line"]}
                ></div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default WellnessRoutine;
