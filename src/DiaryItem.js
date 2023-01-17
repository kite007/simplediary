import { useState } from "react";

const DiaryItem = ({
    onRemove, 
    author, 
    content,
    create_date, 
    emotion, 
    id
}) => {

    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);

    const [localContent, setLocalContent] = useState(content);

    const handleRemove = () => {
        if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onRemove(id);
        }
    }
    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    }
    return (
        <div className="DiaryItem">
            <div className="info">
                <span>작성장 : {author} | 감정점수: {emotion}
                </span>
                <br/>
                <span className="date">{new Date(create_date).toLocaleString()}</span>
            </div>
            <div className="content">
                {
                    isEdit ? 
                    (
                        <>
                            <textarea value={localContent} 
                            onChange={(e)=>setLocalContent(e.target.value)}/>
                        </>
                    ) 
                    : 
                    (
                        <>
                            {content}
                        </>
                    )
                }
            </div>
            {
                isEdit ? 
                (
                    <>
                        <button onClick={handleQuitEdit}>수정 취소</button>
                        <button>수정 완료</button>
                    </> 
                ) : 
                ( 
                    <>
                        <button onClick={handleRemove}>삭제하기</button>
                        <button onClick={toggleIsEdit}>수정하기</button>
                    </> 
                )
            }

        </div>
    );
};

export default DiaryItem;