import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';


function Rating ({rating}: RatingProps) {
    
	const logo = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.15333 2.34L10.3267 4.68667C10.4867 5.01334 10.9133 5.32667 11.2733 5.38667L13.4 5.74C14.76 5.96667 15.08 6.95334 14.1 7.92667L12.4467 9.58C12.1667 9.86 12.0133 10.4 12.1 10.7867L12.5733 12.8333C12.9467 14.4533 12.0867 15.08 10.6533 14.2333L8.66 13.0533C8.3 12.84 7.70667 12.84 7.34 13.0533L5.34667 14.2333C3.92 15.08 3.05333 14.4467 3.42667 12.8333L3.9 10.7867C3.98667 10.4 3.83333 9.86 3.55333 9.58L1.9 7.92667C0.926667 6.95334 1.24 5.96667 2.6 5.74L4.72667 5.38667C5.08 5.32667 5.50667 5.01334 5.66667 4.68667L6.84 2.34C7.48 1.06667 8.52 1.06667 9.15333 2.34Z" stroke="#FFAD49" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>;
    

	return(
		<div>
			<p className={styles['rating-logo']}>{rating}{logo}</p>
		</div>
	);
}

export default Rating;