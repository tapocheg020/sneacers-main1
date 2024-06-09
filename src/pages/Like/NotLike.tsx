import { FC } from "react";
import styles from "./Like.module.scss";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
const NotLike: FC = () => {
  return (
    <div className={styles.ntlWrapper}>
      <div className={styles.ntlContent}>
        <img src="public/servicesImg/smail/image 9.png" alt="" />
        <h2>Закладок нет :(</h2>
        <p>Вы ничего не добавляли в закладки</p>
        <Link to='/' style={{textDecoration: "none"}}>
          <Button>
            <img src="public/Group.png" alt="" /> 
						Вернуться назад
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotLike;