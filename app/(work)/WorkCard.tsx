import Link from "next/link";
import { NextPage } from "next";

interface Props {
  position: string;
  company: string;
  companyUrl: string;
  dates: string;
  responsiblities: string[];
  achievements?: Achievement[];
}

interface Achievement {
  title: string;
  details: string;
}

const WorkCard: NextPage<Props> = (props) => {
  const {
    position,
    company,
    companyUrl,
    dates,
    responsiblities,
    achievements,
  } = props;

  const workDetails = (r: string, i: number) => {
    return (
      <li className="m-4" key={i}>
        • {r}
      </li>
    );
  };

  const achievementDetails = (a: Achievement, i: number) => {
    return (
      <li className="m-4" key={i}>
        <div className="font-semibold">• {a.title}</div>
        <div className="italic">{a.details}</div>
      </li>
    );
  };

  return (
    <div className="min-w-[10rem] rounded-lg border border-slate-300/40 bg-no-repeat bg-gradient-to-r to-slate-300/10 from-transparent lg:text-xl p-5">
      <div className="font-bold text-2xl">{position}</div>
      <div className="text-lg flex mb-3 mt-3 mr-2">
        <Link href={companyUrl} className="underline" target="_blank">
          {company}
        </Link>
        •<div className="ml-2">{dates}</div>
      </div>
      <div className="max-h-[30rem] overflow-auto">
        <div className="italic text-base">
          <ul>{responsiblities.map(workDetails as any)}</ul>
        </div>

        {achievements !== undefined ? (
          <div>
            <div className="text-lg font-semibold">Achievements</div>
            <ul className="text-base">
              {achievements.map(achievementDetails as any)}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WorkCard;
