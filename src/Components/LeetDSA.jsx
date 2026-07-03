import { eyebrow, heading, gradientText, fontMono, cardBase, btnPrimary } from "./designTokens";

function LeetCode() {
  const stats = [
    { label: "Problems Solved", value: "1000+" },
    { label: "Peak Rating", value: "1832" },
    { label: "Global Rank", value: "Top 5%" },
    { label: "Consistent Practice", value: "500+ Days" },
  ];

  return (
    <div>
      <p className={eyebrow}>04 — LeetCode</p>
      <h2 className={`${heading} mt-3 mb-4`}>
        Reps <span className={gradientText}>that add up</span>
      </h2>
      <p className="text-[#8891A8] mb-10">Tracking progress in algorithmic problem-solving and competitive programming.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className={`${cardBase} p-4 text-center`}>
            <p className={`${fontMono} text-2xl font-bold text-[#6FA8FF]`}>{stat.value}</p>
            <p className="text-[#8891A8] text-xs mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className={`${cardBase} p-8`}>
        <div className="flex flex-col items-center space-y-6">
          <div className="w-full flex justify-center overflow-hidden rounded-xl">
            <img
              src="https://leetcard.jacoblin.cool/sharansc482?ext=heatmap"
              alt="LeetCode Stats"
              className="w-full max-w-2xl rounded-lg"
            />
          </div>
          <a
            href="https://leetcode.com/sharansc482"
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
          >
            View Full Profile
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeetCode;
