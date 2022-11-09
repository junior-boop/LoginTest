import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from 'react';
import Context_tiroir from '../context/tiroir_context';
import connexion from '../reduce/connexion_reducer';

export function Login() {
  const [isTrue, setIsTrue] = useState(false);
  const [leftArrow, setLeftArrow] = useState(0);
  const [rightArrow, setRightArrow] = useState(1.6);
  const [btnText, setBtnText] = useState("d'inscription");
  const ref = useRef();

  //connexion
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');

  //use the local tiroir context
  const { etat, dispatch } = useContext(Context_tiroir);
  // 367, 587

  // reduce Connexion
  const [etat2, dispatch2] = useReducer(connexion, true);

  const Height = () => {
    if (isTrue) {
      return 517;
    } else {
      return 377;
    }
  };
  const TranslateX = () => {
    if (isTrue) {
      return -390;
    } else {
      return 0;
    }
  };

  const Clickable = () => {
    setIsTrue(!isTrue);
    Switch();
  };

  const Switch = () => {
    if (isTrue) {
      setLeftArrow(0);
      setRightArrow(1.6);
      setBtnText("d'inscription");
    } else {
      setLeftArrow(1.6);
      setRightArrow(0);
      setBtnText('de connexion');
    }
  };

  useEffect(() => {
    console.log(ref.current.value);
  });

  return (
    <div>
      <div className="haut">
        <div
          className="sectionContent"
          style={{
            height: Height(),
            transform: `translate(${TranslateX()}px)`,
          }}
        >
          <div className="content">
            <h2>Connexion</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
              dignissimos?
            </p>
            <div className="champs">
              <label htmlFor="">E-mail Utilisateurs</label>
              <input
                className="name"
                type="mail"
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>
            <div className="champs">
              <label htmlFor="">Mots de passe</label>
              <input
                className="name"
                type="password"
                onChange={({ target }) => setMdp(target.value)}
              />
            </div>
            <div className="champs">
              <button
                onClick={() =>
                  dispatch2({
                    type: 'CONNEXION',
                    payload: { email: email, password: mdp }
                  })
                }
              >
                Connecter
              </button>
            </div>
          </div>
          <div className="content">
            <h2>Inscription</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
              dignissimos?
            </p>
            <div className="champs">
              <label htmlFor="">Nom</label>
              <input ref={ref} className="name" type="text" />
            </div>
            <div className="champs">
              <label htmlFor="">Prenom</label>
              <input className="name" type="text" />
            </div>
            <div className="champs">
              <label htmlFor="">E-mail</label>
              <input className="name" type="mail" />
            </div>
            <div className="champs">
              <label htmlFor="">Mots de passe</label>
              <input className="name" type="password" />
            </div>
            <div className="champs">
              <button>Inscription</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bas">
        <div className="tool">
          <div className="setting" onClick={() => dispatch({ type: 'OPEN' })}>
            <MingcuteSettings1Fill width={1.6} height={1.6} />
          </div>
          <div className="SignUp" onClick={Clickable}>
            <div>
              <MingcuteArrowLeftLine width={leftArrow} /> Page {btnText}{' '}
              <MingcuteArrowRightLine width={rightArrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MingcuteSettings1Fill({ width, height, ...props }) {
  return (
    <svg
      width={`${width}em`}
      height={`${height}em`}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M10.75 2.567a2.5 2.5 0 0 1 2.5 0L19.544 6.2a2.5 2.5 0 0 1 1.25 2.165v7.268a2.5 2.5 0 0 1-1.25 2.165l-6.294 3.634a2.5 2.5 0 0 1-2.5 0l-6.294-3.634a2.5 2.5 0 0 1-1.25-2.165V8.366A2.5 2.5 0 0 1 4.456 6.2l6.294-3.634ZM12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
        ></path>
      </g>
    </svg>
  );
}

export function MingcuteArrowRightLine({ width, props }) {
  return (
    <svg
      width={`${width}em`}
      height={`${width}em`}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414Z"
        ></path>
      </g>
    </svg>
  );
}

export function MingcuteArrowLeftLine({ width, ...props }) {
  return (
    <svg
      width={`${width}em`}
      height={`${width}em`}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M3.636 11.293a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414-1.414L6.757 13H20a1 1 0 1 0 0-2H6.757l3.95-3.95a1 1 0 0 0-1.414-1.414l-5.657 5.657Z"
        ></path>
      </g>
    </svg>
  );
}
