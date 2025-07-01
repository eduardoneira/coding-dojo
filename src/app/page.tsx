export default function Home() {
  // Sample LeetCode problems data
  const leetcodeProblems = [
    { id: 1, name: "Two Sum" },
    { id: 2, name: "Add Two Numbers" },
    { id: 3, name: "Longest Substring Without Repeating Characters" },
    { id: 4, name: "Median of Two Sorted Arrays" },
    { id: 5, name: "Longest Palindromic Substring" },
    { id: 6, name: "Zigzag Conversion" },
    { id: 7, name: "Reverse Integer" },
    { id: 8, name: "String to Integer (atoi)" },
    { id: 9, name: "Palindrome Number" },
    { id: 10, name: "Regular Expression Matching" },
    { id: 11, name: "Container With Most Water" },
    { id: 12, name: "Integer to Roman" },
    { id: 13, name: "Roman to Integer" },
    { id: 14, name: "Longest Common Prefix" },
    { id: 15, name: "3Sum" },
    { id: 16, name: "3Sum Closest" },
    { id: 17, name: "Letter Combinations of a Phone Number" },
    { id: 18, name: "4Sum" },
    { id: 19, name: "Remove Nth Node From End of List" },
    { id: 20, name: "Valid Parentheses" },
    { id: 21, name: "Merge Two Sorted Lists" },
    { id: 22, name: "Generate Parentheses" },
    { id: 23, name: "Merge k Sorted Lists" },
    { id: 24, name: "Swap Nodes in Pairs" },
    { id: 25, name: "Reverse Nodes in k-Group" },
    { id: 26, name: "Remove Duplicates from Sorted Array" },
    { id: 27, name: "Remove Element" },
    { id: 28, name: "Find the Index of the First Occurrence in a String" },
    { id: 29, name: "Divide Two Integers" },
    { id: 30, name: "Substring with Concatenation of All Words" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            LeetCode Problems
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            A collection of coding challenges to practice your skills
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {leetcodeProblems.map((problem) => (
            <div
              key={problem.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                  #{problem.id}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                {problem.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
          <p>Showing {leetcodeProblems.length} problems</p>
        </div>
      </div>
    </div>
  );
}
