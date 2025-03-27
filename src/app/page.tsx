import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      {/* 左侧导航栏 */}
      <nav className="w-64 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <Image
            src="/deepseek.svg"
            alt="DeepSeek logo"
            width={32}
            height={32}
            className="dark:invert"
          />
          <span className="text-xl font-semibold dark:text-white">DeepSeek</span>
        </div>

        {/* 历史记录列表 */}
        <div className="flex-1 overflow-y-auto">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">历史记录</h2>
          <div className="space-y-2">
            {/* 这里可以添加实际的历史记录项目 */}
            <div className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <p className="text-sm text-gray-700 dark:text-gray-300 truncate">上一次的对话</p>
            </div>
          </div>
        </div>

        {/* 用户信息 */}
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">用户名</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">user@example.com</p>
            </div>
          </div>
        </div>
      </nav>

      {/* 右侧聊天区域 */}
      <main className="flex-1 flex flex-col">
        {/* 聊天历史 */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* 这里可以添加实际的聊天消息 */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">DeepSeek</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">你好！我是DeepSeek AI助手，有什么我可以帮你的吗？</p>
            </div>
          </div>
        </div>

        {/* 输入区域 */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="输入你的问题..."
              className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              发送
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
