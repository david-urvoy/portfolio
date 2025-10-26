import { SkillCard } from '@/components/skill'
import { cv } from '@/data/cv'

export function Cv() {
    return (
        <div className="pointer-events-none absolute top-0 flex flex-col">
            <div
                id="header"
                className="m-4 flex flex-col gap-y-2 rounded-2xl bg-blue-100 p-8 text-3xl font-bold"
            >
                <div className="inline-flex">
                    <p className="p-4">
                        {cv.name} - {cv.title}
                    </p>
                    <div className="flex w-fit flex-col gap-y-2">
                        <img
                            src="images/me.jpeg"
                            alt="David Urvoy"
                            className="inline-block max-w-32 rounded-2xl"
                        />
                        <span className="inline-flex justify-between">
                            <img
                                src="images/react.svg"
                                alt="React"
                                className="h-8 w-8"
                            />
                            <img
                                src="images/next.svg"
                                alt="Next"
                                className="h-8 w-8"
                            />
                            <img
                                src="images/three.svg"
                                alt="Three"
                                className="h-8 w-8"
                            />
                        </span>
                    </div>
                </div>
                <p>{cv.description}</p>
            </div>

            <div className="grid grid-cols-2">
                <SkillCard
                    level={95}
                    name="React"
                    altText="React"
                    imagePath="images/react.svg"
                />
                <SkillCard
                    level={80}
                    name="Next.js"
                    altText="Next.js"
                    imagePath="images/next.svg"
                />
                <SkillCard
                    level={75}
                    name="Three.js"
                    altText="Three.js"
                    imagePath="images/three.svg"
                />
                <SkillCard
                    level={90}
                    name="TypeScript"
                    altText="TypeScript"
                    imagePath="images/typescript.svg"
                />
                <SkillCard
                    level={85}
                    name="Html 5"
                    altText="Html"
                    imagePath="images/html.svg"
                />
                <SkillCard
                    level={80}
                    name="CSS 3"
                    altText="CSS"
                    imagePath="images/css.svg"
                />
                <SkillCard
                    level={90}
                    name="Javascript"
                    altText="Javascript"
                    imagePath="images/js.svg"
                />
                <SkillCard
                    level={90}
                    name="Tailwind CSS"
                    altText="Tailwind CSS"
                    imagePath="images/tailwind.svg"
                />
                <SkillCard
                    level={70}
                    name="GraphQL"
                    altText="GraphQL"
                    imagePath="images/graphql.svg"
                />
                <SkillCard
                    level={85}
                    name="Node.js"
                    altText="Node.js"
                    imagePath="images/nodejs.svg"
                />
            </div>

            <ul className="opacity-80">
                {cv.experiences.map((exp, index) => (
                    <li
                        key={index}
                        className="mx-8 my-4 mb-6 rounded-2xl bg-green-100 p-8 text-2xl font-semibold drop-shadow-xl drop-shadow-cyan-700"
                    >
                        <h3 className="text-xl font-bold">
                            {exp.title} @ {exp.company}
                        </h3>
                        <p className="italic">
                            {exp.period} - {exp.location}
                        </p>
                        <p>{exp.description}</p>
                        {exp.details && (
                            <p className="whitespace-pre-wrap">{exp.details}</p>
                        )}
                        <p className="mt-2">
                            <strong>Stack:</strong> {exp.stack?.join(', ')}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
