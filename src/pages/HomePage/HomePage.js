import Footer from "../../components/Footer/Footer";
import PostList from "../../components/PostList/PostList";
import PostOptions from "../../components/PostOptions/PostOptions";
import SuggestedFollows from "../../components/SuggestedFollows/SuggestedFollows";
import styles from "../HomePage/HomePage.module.scss"

export default function HomePage(){
    return (
    <section className={styles.homePageContainer}>
      <div className={styles.rightSide}>
				<PostOptions />
				<PostList />
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