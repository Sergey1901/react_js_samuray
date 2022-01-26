import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
export function Profile() {
    return (
        <div className={s.context}>
            <img src='https://klike.net/uploads/posts/2019-06/1561182942_2.jpg'/>
            <div className={s.item}>
                ava + description</div>
          <MyPosts/>
        </div>
    )

}
