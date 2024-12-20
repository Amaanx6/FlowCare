import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Frown, Smile, Angry, Coffee, Zap, Moon, ChevronDown, ChevronUp, Heart, Sun, LayoutDashboard, Home, GraduationCap, ShoppingBag, ActivitySquare, Stethoscope, Bot, Search, BookOpen, Utensils, Leaf, Clock, Filter, Bookmark, Share2, Award } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Your Menstrual Cycle",
    excerpt: "Learn about the phases of your menstrual cycle and how they affect your body.",
    author: "Dr. Emily Johnson",
    date: "2024-03-15",
    readingTime: "5 min",
    icon: <Calendar className="h-12 w-12 text-pink-500" />,
    category: "Health"
  },
  {
    id: 2,
    title: "Nutrition Tips for a Healthy Period",
    excerpt: "Discover the best foods to eat during your menstrual cycle for optimal health.",
    author: "Nutritionist Sarah Lee",
    date: "2024-03-10",
    readingTime: "4 min",
    icon: <Utensils className="h-12 w-12 text-green-500" />,
    category: "Nutrition"
  },
  {
    id: 3,
    title: "Managing PMS Symptoms Naturally",
    excerpt: "Explore natural remedies and lifestyle changes to alleviate PMS symptoms.",
    author: "Holistic Health Coach Maria Garcia",
    date: "2024-03-05",
    readingTime: "6 min",
    icon: <Leaf className="h-12 w-12 text-purple-500" />,
    category: "Wellness"
  },
  {
    id: 4,
    title: "The History of Menstrual Products",
    excerpt: "A journey through time exploring the evolution of menstrual products.",
    author: "Historian Dr. Alex Thompson",
    date: "2024-02-28",
    readingTime: "7 min",
    icon: <Clock className="h-12 w-12 text-blue-500" />,
    category: "History"
  },
];

const accordionData = [
  {
    id: 1,
    question: "What is a period?",
    answer: "Your period or menstruation is part of your menstrual cycle. This cycle is ultimately your body's way of preparing itself for a possible pregnancy.",
  },
  {
    id: 2,
    question: "What are the signs that my period is coming?",
    answer: "Common signs include mood changes, breast tenderness, bloating, and mild cramping. These symptoms can vary from person to person.",
  },
  {
    id: 3,
    question: "How much blood do we lose during a period?",
    answer: "On average, women lose between 3-9 teaspoons of fluid a month during their period. About half of this is blood, while the rest is made up of tissue, nutrients, and cervical mucus.",
  },
];

export function Blogs() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [activeItem, setActiveItem] = useState(null);
  const [readSections, setReadSections] = useState([false, false, false]);
  const [completedBlogs, setCompletedBlogs] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString());
      return newMode;
    });
  };

  const toggleAccordion = (id) => {
    setActiveItem((prev) => (prev === id ? null : id));
  };

  const handleRead = (index) => {
    const updatedReadSections = [...readSections];
    updatedReadSections[index] = true;
    setReadSections(updatedReadSections);
    setCompletedBlogs(prev => prev + 1);
  };

  const handleSavePost = (postId) => {
    setSavedPosts(prev => {
      if (prev.includes(postId)) {
        return prev.filter(id => id !== postId);
      } else {
        return [...prev, postId];
      }
    });
  };

  const handleShare = (postId) => {
    // Implement sharing functionality here
    console.log(`Sharing post ${postId}`);
  };

  const SidebarLink = ({ icon, label, onClick, active = false }) => (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-pink-200 dark:bg-pink-900 text-pink-800 dark:text-pink-200'
          : 'text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <aside className="bg-white dark:bg-gray-800 w-64 min-h-screen p-4">
        <nav className="mt-8 space-y-4">
          <h1 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-8">FlowCare</h1>
          <SidebarLink icon={<LayoutDashboard size={20} />} label="Dashboard" onClick={() => navigate('/dashboard')} />
          <SidebarLink icon={<Home size={20} />} label="Home" onClick={() => navigate('/')} />
          <SidebarLink icon={<GraduationCap size={20} />} label="Education" onClick={() => navigate('/blogs')} active />
          <SidebarLink icon={<ShoppingBag size={20} />} label="Shop" onClick={() => navigate('/Ecom')} />
          <SidebarLink icon={<ActivitySquare size={20} />} label="Track Your Health" onClick={() => navigate('/tracker')} />
          <SidebarLink icon={<Stethoscope size={20} />} label="Expert Consultation" onClick={() => navigate('/consultations')} />
          <SidebarLink icon={<Bot size={20} />} label="AI Chatbot" onClick={() => navigate('/ChatBot')} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-pink-600 dark:text-pink-400">Education Hub</h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Featured Article */}
          <div className="bg-pink-100 dark:bg-pink-900 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-pink-700 dark:text-pink-300 mb-2">Featured Article</h2>
            <div className="flex items-center space-x-4">
              <Award className="h-16 w-16 text-pink-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Embracing Your Cycle: A Guide to Menstrual Wellness</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Discover how to work with your menstrual cycle for optimal health and well-being.</p>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex space-x-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-gray-700 dark:text-white"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-gray-700 dark:text-white"
            >
              <option value="All">All Categories</option>
              <option value="Health">Health</option>
              <option value="Nutrition">Nutrition</option>
              <option value="Wellness">Wellness</option>
              <option value="History">History</option>
            </select>
          </div>

          {/* Trophy System */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md">
            <h2 className="text-2xl font-semibold text-pink-700 dark:text-pink-300 mb-4">
              Your Learning Progress
            </h2>
            <div className="flex justify-center gap-4">
              {[...Array(5)].map((_, index) => (
                <Heart
                  key={index}
                  className={`h-8 w-8 ${
                    index < completedBlogs ? 'text-pink-500' : 'text-gray-300 dark:text-gray-600'
                  }`}
                  fill={index < completedBlogs ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {completedBlogs} out of 5 articles completed
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    {post.icon}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleSavePost(post.id)}
                        className={`p-2 rounded-full ${
                          savedPosts.includes(post.id)
                            ? 'bg-pink-100 text-pink-500'
                            : 'bg-gray-100 text-gray-500'
                        } hover:bg-pink-200`}
                      >
                        <Bookmark className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleShare(post.id)}
                        className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-pink-200"
                      >
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.author}</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Period 101 Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Period 101</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Welcome to Period 101, your comprehensive guide to understanding menstruation. 
              Whether you're experiencing your first period or looking to deepen your knowledge, 
              we're here to help you navigate this important aspect of your health.
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6 dark:bg-gray-700">
              <div 
                className="bg-pink-600 h-2.5 rounded-full dark:bg-pink-500" 
                style={{ width: `${(readSections.filter(Boolean).length / readSections.length) * 100}%` }}
              ></div>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {accordionData.map(({ id, question, answer }, index) => (
                <div key={id} className="border border-pink-200 dark:border-pink-800 rounded-lg">
                  <button
                    className="flex justify-between items-center w-full p-4 text-left"
                    onClick={() => toggleAccordion(id)}
                  >
                    <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{question}</span>
                    {activeItem === id ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {activeItem === id && (
                    <div className="p-4 bg-pink-50 dark:bg-gray-700">
                      <p className="textgray-700 dark:text-gray-300">{answer}</p>
                      <div className="mt-4">
                        <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                          <input
                            type="checkbox"
                            checked={readSections[index]}
                            onChange={() => handleRead(index)}
                            className="form-checkbox text-pink-500"
                          />
                          <span>I've read this section</span>
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

