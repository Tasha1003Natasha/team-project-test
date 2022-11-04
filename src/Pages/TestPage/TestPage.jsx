import { useDispatch, useSelector } from 'react-redux';
import { getCurrentTest } from '../../redux/tests/test-selector';
import { getToken } from 'redux/auth/auth-selector';

import TestForm from '../../components/TestForm/TestForm';
import { Link } from 'react-router-dom';
import style from './TestPage.module.css';

import { getTest } from 'redux/tests/tests-operations';
import AuthPage from 'Pages/AuthPage/AuthPage';

const TestPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const testCurrent = useSelector(getCurrentTest);
  console.log(testCurrent);
  const type = String(testCurrent[0].type);
  console.log(type);
  // const changeNext = radioButton => {
  //   const checkRadio = [];
  //   for (let i = 0; i < radioButton.lenght; i++) {
  //     if (radioButton[i].checked) {
  //       checkRadio.push(radioButton[i]);
  //     }
  //   }
  //   console.log(checkRadio);
  //   return checkRadio.length;
  // };

  // nextBtn.disabled = true;
  // console.log(nextBtn);

  const hendlerCloseTest = () => {
    const test = [];
    dispatch(getTest(test));
  };

  return (
    <>
      {token ? (
        <section className={style.sectionTest}>
          <div className={style.hederTest}>
            {type === 'tech' && (
              <p className={style.hederText}>[QA_technical&shy;_training]</p>
            )}
            {type === 'theory' && (
              <p className={style.hederText}>[Testing &shy;theory_]</p>
            )}
            <Link
              className={style.closeBtn}
              to="/"
              type="button"
              onClick={hendlerCloseTest}
            >
              Close test
            </Link>
          </div>
          <TestForm />
        </section>
      ) : (
        <AuthPage />
      )}
    </>
  );
};

export default TestPage;
