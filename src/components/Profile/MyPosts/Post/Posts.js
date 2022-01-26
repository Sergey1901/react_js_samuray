import s from './Posts.module.css'
export function Posts(props) {
    return (
        <div>
            <div className={s.item}>
                <img src='https://cameralabs.org/media/camera/fotodny/dekabr/maska_samuraia.jpg'/>
                {props.message}</div>
            <div>
                {props.like}
            </div>
                    </div>
    )


}
