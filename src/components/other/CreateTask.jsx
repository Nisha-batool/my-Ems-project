

const CreateTask = () => {
  return (
    <div className=" w-full p-10 bg-[#1C1C1C] text-white">
      
      
      <form className="flex flex-wrap w-full bg-[#222] mt-8 p-8 rounded-xl justify-between">
        
        
        <div className="w-1/2">
          <div className="mb-5">
            <h3 className="text-gray-300 text-sm mb-2">Task Title</h3>
            <input 
              className="text-sm py-2 px-4 w-4/5 rounded outline-none bg-[#333] border-gray-600" 
              type="text" 
              placeholder="Make a UI design" 
            />
          </div>

          <div className="mb-5">
            <h3 className="text-gray-300 text-sm mb-2">Date</h3>
            <input 
              className="text-sm py-2 px-4 w-4/5 rounded outline-none bg-[#333] border-gray-600" 
              type="date" 
            />
          </div>

          <div className="mb-5">
            <h3 className="text-gray-300 text-sm mb-2">Assign to</h3>
            <input 
              className="text-sm py-2 px-4 w-4/5 rounded outline-none bg-[#333] border border-gray-600" 
              type="text" 
              placeholder="employee name" 
            />
          </div>

          <div className="mb-5">
            <h3 className="text-gray-300 text-sm mb-2">Category</h3>
            <input 
              className="text-sm py-2 px-4 w-4/5 rounded outline-none bg-[#333] border border-gray-600" 
              type="text" 
              placeholder="design, dev, etc" 
            />
          </div>
        </div>

        
        <div className="w-2/5 flex-col">
          <div className="mb-5">
            <h3 className="text-gray-300 text-sm mb-2">Description</h3>
            <textarea 
              className="w-full bg-[#333] border-gray-600 rounded outline-none p-3 text-white" 
              rows="8"
              placeholder="Description"
            ></textarea>
          </div>
          <button type="button" className="bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-5 rounded">
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask