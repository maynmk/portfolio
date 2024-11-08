import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { changeTabActive } from '../redux/actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ activeTab }) => {
    const dispatch = useDispatch();
    
    // Links internos (em inglês) para navegação
    const [linkNav] = useState(['home', 'skills', 'projects', 'contacts']);
    
    // Tradução dos links para exibir em português
    const translations = {
        home: 'Início',
        skills: 'Habilidades',
        projects: 'Projetos',
        contacts: 'Contato',
    };
    
    const [statusNav, changeStatusNav] = useState(null);

    const toggleNav = () => {
        changeStatusNav(statusNav === null ? 'active' : null);
    };

    const changeTab = (value) => {
        dispatch(changeTabActive(value)); // Passa o valor em inglês para navegação interna
        toggleNav();
    };

    return (
        <header>
            <div className="logo">
                DEV: MAYSON
            </div>
            <nav className={statusNav}>
                {linkNav.map(value => (
                    <span
                        key={value}
                        className={activeTab === value ? 'active' : ''}
                        onClick={() => changeTab(value)} // Passando o valor em inglês para manter a navegação consistente
                    >
                        {translations[value]} {/* Exibe o valor traduzido em português */}
                    </span>
                ))}
            </nav>
            <div className="icon-bar" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    );
};

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
});

export default connect(mapStateToProps, { changeTabActive })(NavBar);
