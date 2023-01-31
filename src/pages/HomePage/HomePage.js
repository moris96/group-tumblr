import Footer from "../../components/Footer/Footer";
import PostList from "../../components/PostList/PostList";
import SuggestedFollows from "../../components/SuggestedFollows/SuggestedFollows";
import styles from "../HomePage/HomePage.module.scss"

export default function HomePage({user, newPostElement, setNewPostElement}){
    return (
    <section className={styles.homePageContainer}>
      <div className={styles.rightSide}>
				<PostList newPostElement={newPostElement} setNewPostElement={setNewPostElement} user={user}/>
			</div>
			<div className={styles.leftSide}>
				<SuggestedFollows />
			</div>
			<div>
				<Footer />
			</div>
    </section>
    )
}