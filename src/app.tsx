import { cv } from '@/data/cv'

export default function App() {
    return (
        <div className="flex flex-col">
            <div
                id="header"
                className="m-4 rounded-2xl bg-blue-100 p-8 text-3xl font-bold"
            >
                David Urvoy — Lead Front & Expert Fullstack (React / Node /
                GraphQL)
            </div>

            <ul>
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
