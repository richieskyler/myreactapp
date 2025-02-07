import styles from "../../styles/usercard.module.css"
export default function Usercard({userName, userAge, userDescrption}){
    return(
    <div className={styles.userCard}>
        <div className={styles.userInfo}>
        <p><h3>Name</h3></p>
        <p>{userName}</p>
        </div>
        <div className={styles.userInfo}>
        <p><h3>Age</h3></p>
        <p>{userAge}</p>
        </div>
        <div className={styles.userInfo}>
        <p><h3>Description</h3></p>
        <p>{userDescrption}</p>
        </div>
    </div>
    )
}
