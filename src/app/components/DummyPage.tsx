"use client"
const DummyPage: React.FC<{ title: string }> = ({ title }) => (
    <div className="p-12 text-center text-4xl text-gray-400 h-96 flex items-center justify-center border-4 border-dashed border-violet-700 rounded-xl">
        {title} Content Page (Next Component)
    </div>
);

export default DummyPage;