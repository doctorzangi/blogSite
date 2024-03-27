import React, { useState } from 'react';
// import { Editor, EditorState } from 'draft-js';
// import 'draft-js/dist/Draft.css';
import MainLayout from '../../Layouts/MainLayout';

const NewBlog = () => {
    // const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    // const onChange = (newEditorState) => {
    //     setEditorState(newEditorState);
    // };

    return (
        <MainLayout>
            {/* <div className="container p-9 py-8">
                <h1 className="text-3xl font-bold mb-4">Create New Blog</h1>
                <form className="bg-white p-6 rounded-md shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="blogTitle">Blog Title</label>
                        <input className="focus:outline-none w-full px-3 py-2 bg-gray-50 border rounded-md" type="text" id="blogTitle" placeholder="Enter blog title" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="blogContent">Blog Content</label>
                        <Editor
                            editorState={editorState}
                            onChange={onChange}
                            placeholder="Enter blog content"
                        />
                    </div>
                    {/* Add image upload component here */}
                    {/* <div className='flex flex-row items-center justify-end'>
                        <div className="mt-6 mr-5">
                            <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300">Cancel</button>
                        </div>
                        <div className="mt-6">
                            <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300">Create</button>
                        </div>
                    </div>
                </form>
            </div> */}
        </MainLayout>
    );
}

export default NewBlog;
