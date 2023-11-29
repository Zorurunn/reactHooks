import mainPageStyle from '../app/mainPage.module.css'

export const Container = (props) => {
    return (
        <>
            <div className={mainPageStyle.container}>
                {props.children}
            </div>
        </>
    )
}
