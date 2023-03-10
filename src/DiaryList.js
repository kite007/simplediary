import DiaryItem
 from "./DiaryItem";
const DiaryList = ({onRemove, diaryList}) => {
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {/* {diaryList.map((it,idx)=> (
                <div key={idx}> */}
                {diaryList.map((it)=> (
                    <DiaryItem key={it.id} {...it} onRemove={onRemove}/>
                // <div key={it.id}>   
                //     <div>작성자: {it.author}</div>
                //     <div>일기: {it.content}</div>
                //     <div>감정: {it.emoation}</div>
                //     <div>작성 시간(ms): {it.create_date}</div>
                // </div>
                ))}
            </div>
        </div>
    );
};

DiaryList.defaultProps = {
    diaryList:[],
}

export default DiaryList;