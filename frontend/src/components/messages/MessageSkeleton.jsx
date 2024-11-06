import React from 'react'

const MessageSkeleton = () => {
    return (
        <>
            <div className="flex w-1/2 flex-col gap-4 mb-2">
                <div className="flex items-center gap-4 ">
                    <div className="skeleton size-10 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-1/2"></div>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-end'>
                <div className="flex w-1/2 flex-col gap-4">
                    <div className="flex items-center gap-4 ">
                        <div className="flex items-end flex-col gap-2 w-full">
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-1/2"></div>
                        </div>
                        <div className="skeleton size-10 shrink-0 rounded-full"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageSkeleton