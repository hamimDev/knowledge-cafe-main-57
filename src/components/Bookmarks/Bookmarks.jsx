
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 ml-4 mt-2 pt-4">
            <div className='text-center bg-gray-300 rounded-lg w-[411px] h-[80px]'>
                <h3 className="text-[24px] text-blue-700 font-bold pt-5">Spent time on read : {readingTime}min</h3>
            </div>
            <div className=' bg-gray-300 mt-5 rounded-lg w-[411px] h-auto'>
            <h2 className="text-2xl ml-[30px] font-bold pb-5 pt-5">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
            }
            <p className='mt-5'>.</p>
            </div>
        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks