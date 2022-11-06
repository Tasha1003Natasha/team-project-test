import s from './Results.module.css';
// import Chart from 'components/Chart/Chart';
import Chart2 from 'components/Chart/Chart2';
import Cat from '../../images/result/result.png';
import { useSelector } from 'react-redux';
import {
  getCurrectAnswer,
  getCurrentTest,
} from '../../redux/tests/test-selector';
import { Link } from 'react-router-dom';

const Results = () => {
  const correct = useSelector(getCurrectAnswer);
  const currentTest = useSelector(getCurrentTest);

  return (
    <main>
      <section className={s.sectionResults}>
        <div className={s.container}>
          <div className={s.resultsContent}>
            <div className={s.titlesList}>
              <h2 className={s.resultTitle}>Results</h2>
              {currentTest[0].type === 'theory' ? (
                <p className={s.resultSubtitle}>[ Testing theory_]</p>
              ) : (
                <p className={s.resultSubtitle}>[ Технічна підготовка QA]</p>
              )}

              <div className={s.line}></div>
            </div>
            <div className={s.diagrammWrapper}>
              <div className={s.diagramBox}>
                <Chart2 />
              </div>

              <ul className={s.answerList}>
                <li className={s.answerCorrect}>
                  Correct answers -<span> {correct}</span>
                </li>
                <li className={s.answerTotal}>
                  Total questions -<span> 12</span>
                </li>
              </ul>
            </div>
            <img className={s.resultPic} src={Cat} alt="result" />
            <p className={s.resultText}>
              {correct === 12 ? 'Great!' : 'Not bad'}
            </p>
            <p className={s.materialsText}>
              {correct === 12
                ? 'You are cool!'
                : 'But you still need to learn some materials.'}
            </p>
            <Link to="/test" className={s.buttonRepeat}>
              Try again
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Results;
