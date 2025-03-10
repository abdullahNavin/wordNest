import { IoSearch } from "react-icons/io5";
import useWordHook from '../Hook/useWordHook';

const SearchBox = () => {
    const { setSearchWord, setSuggestionWord, suggestionData, suggestionWord, showSuggestion, setShowSuggestion } = useWordHook()

    const handleSuggetionWord = (targetedWord) => {
        setSearchWord(targetedWord)
        setSuggestionWord(targetedWord)
        setShowSuggestion(false)
    }
    const handleSearchWord = () => {
        setShowSuggestion(false)
        setSearchWord(suggestionWord)
    }

    return (
        <div className='mt-7'>
            <div className="relative w-96">
                <input
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearchWord()
                        }
                    }}
                    onFocus={() => setShowSuggestion(true)}
                    onChange={(e) => setSuggestionWord(e.target.value)}
                    value={suggestionWord}
                    type="text"
                    placeholder="Search a word"
                    className="w-full rounded-full pl-4 pr-10 py-2 border border-gray-400 outline-none white-shadow focus:border-transparent transition-all"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <IoSearch />
                </div>

                {/* suggetion */}
                {
                    showSuggestion && suggestionData &&
                    <ul className="bg-[#15277dfd] text-white absolute top-full left-0 w-full rounded-xs">
                        {
                            suggestionData?.map((word, index) => <li
                                className={`cursor-pointer border-b border-gray-500 p-2.5 ${suggestionData.length === index + 1 && 'border-none'}`} key={index}
                                onClick={() => handleSuggetionWord(word)}
                            >{word}
                            </li>)
                        }
                    </ul>
                }
            </div>

        </div>
    );
};

export default SearchBox;