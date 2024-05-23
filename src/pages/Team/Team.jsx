import style from "./Team.module.css"
import { PagesBanner, PagesHeader, TeamCard } from "../../components"
import { Employees } from "../../constants"

const Team = () => (
  <>
    <section className={style.Team_Page}>
      <PagesHeader name={"Team"} />
      <div className={style.Team_Container}>
        {Employees.map((employee) => (
          <TeamCard key={employee.id} {...employee} />
        ))}
      </div>
      <PagesBanner />
    </section>
  </>
)

export default Team
