import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import i18n from 'i18next';
import { withTranslation } from 'react-i18next';
import { Fade } from 'react-reveal';
import loadable from '@loadable/component';

import * as S from './styles';

const SvgIcon = loadable(() => import('../../common/SvgIcon'));
const Container = loadable(() => import('../../common/Container'));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} />
      </a>
    );
  };

  return (

        // <S.Footer>
          // <Container>
          //   <Row type="flex" justify="space-between">
          //     <Col lg={10} md={10} sm={12} xs={24}>
          //       <S.Language>{t('Contact')}</S.Language>
          //       <S.Large to="/">{t('Tell us everything')}</S.Large>
          //       <S.Para>
          //         {t(
          //           `Do you have any question regarding the project? Feel free to reach out.`
          //         )}
          //       </S.Para>
          //       <a href="mailto:l.qqbadze@gmail.com">
          //         <S.Chat>{t(`Let's Chat`)}</S.Chat>
          //       </a>
          //     </Col>
          //     <Col lg={8} md={8} sm={12} xs={24}>
          //       <S.Title>{t('Policy')}</S.Title>
          //       <S.Large to="/" left="true">
          //         {t('Application Security')}
          //       </S.Large>
          //       <S.Large left="true" to="/">
          //         {t('Software Principles')}
          //       </S.Large>
          //     </Col>
          //     <Col lg={6} md={6} sm={12} xs={24}>
          //       <S.Empty />
          //       <S.Large left="true" to="/">
          //         {t('Support Center')}
          //       </S.Large>
          //       <S.Large left="true" to="/">
          //         {t('Customer Support')}
          //       </S.Large>
          //     </Col>
          //   </Row>
          //   <Row type="flex" justify="space-between">
          //     <Col lg={10} md={10} sm={12} xs={24}>
          //       <S.Empty />
          //       <S.Language>{t('ADDRESS')}</S.Language>
          //       <S.Para>Rancho Santa Margarita</S.Para>
          //       <S.Para>2131 Elk Street</S.Para>
          //       <S.Para>California</S.Para>
          //     </Col>
          //     <Col lg={8} md={8} sm={12} xs={24}>
          //       <S.Title>{t('Company')}</S.Title>
          //       <S.Large left="true" to="/">
          //         {t('About')}
          //       </S.Large>
          //       <S.Large left="true" to="/">
          //         {t('Blog')}
          //       </S.Large>
          //       <S.Large left="true" to="/">
          //         {t('Press')}
          //       </S.Large>
          //       <S.Large left="true" to="/">
          //         {t('Careers & Culture')}
          //       </S.Large>
          //     </Col>
              // <Col lg={6} md={6} sm={12} xs={24}>
              //   <S.Select>
              //     <S.Label htmlFor="select-lang">{t('Language')}</S.Label>
              //     // <S.LangSelect
              //     //   onChange={handleChange}
              //     //   value={i18n.language}
              //     //   id="select-lang"
              //     // >
              //     //   <option value="en">English</option>
              //     //   <option value="es">Español</option>
              //     // </S.LangSelect>
              //   </S.Select>
              // </Col>
          //   </Row>
          // </Container>
        // </S.Footer>
        <Fragment>
          <Fade bottom>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: '3rem' }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <Row>
                  <SvgIcon src="logo2.svg" aria-label="homepage"/>
                  <Col>
                    <SvgIcon src="logo.svg" aria-label="homepage"/>
                    <p>by <a rel="noreferrer" href="https://codingee.com/" target="_blank">codingee</a></p>
                    </Col>
                    </Row>
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://github.com/Codingee"
                  src="github.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/aryan-ganotra-a818aa179/"
                  src="linkedin.svg"
                />
                <SocialLink
                  href="https://www.instagram.com/codin_gee/?hl=en"
                  src="instagram.svg"
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
