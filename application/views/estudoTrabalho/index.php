<section class="main-content">
  <div class="content">
    <h4>explore, estude e trabalhe!</h4>
    <p>
      Nos programas de intercâmbio que incluem estudo do idioma + trabalho, os estudantes tem a permissão de trabalhar
      por um período de horas limitado por semana, enquanto estudam no turno inverso.
    </p>

    <p>
      O próprio intercambista é responsável por encontrar a sua vaga de emprego, mas as bases da Egali auxiliam com
      dicas sobre emprego, através de workshops específicos de trabalho.
    </p>
  </div>
</section>

<?php
$spanishPackages = $data['pacotes']['espanhol'];
$englishCourses = $data['pacotes']['ingles'];
$germanCourses = $data['pacotes']['alemao'];
?>

<section class="motivos">
  <div class="box-title-section">
    <h5>programas de estudar idiomas</h5>
    <h4>ESCOLHA O SEU!</h4>
  </div>

  <div class="box-title-section">
    <h5>Espanhol</h5>
  </div>

  <div class="container">
    <div id="carousel-idiomas-desktop" class="swiperCarousel swiperCarouselIdiomas">
      <div class="swiper-wrapper">
        <?php foreach ($spanishPackages as $package): ?>
          <div class="swiper-slide">
            <div class="item"
              style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(<?= $package['linkImagem'] ?>); background-repeat: no-repeat; background-size: cover;">
              <div class="dados-depoimento box-right">
                <div class="box-textos-motivos">
                  <div class="d-flex">
                    <h3>
                      <?= $package['nomeCurso'] ?> ✦
                    </h3>
                  </div>

                  <p>
                    <?= $package['descricaoCurso'] ?>
                  </p>

                  <div class="btn-anchor-carousel">
                    <a href="cursosIdiomas/ver/<?= $package['idCurso'] ?>">saiba mais</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>

  <div class="box-title-section">
    <h5>Inglês</h5>
  </div>

  <div class="container">
    <div id="carousel-idiomas-desktop" class="swiperCarousel swiperCarouselIdiomas">
      <div class="swiper-wrapper">
        <?php foreach ($englishCourses as $package): ?>
          <div class="swiper-slide">
            <div class="item"
              style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(<?= $package['linkImagem'] ?>); background-repeat: no-repeat; background-size: cover;">
              <div class="dados-depoimento box-right">
                <div class="box-textos-motivos">
                  <div class="d-flex">
                    <h3>
                      <?= $package['nomeCurso'] ?> ✦
                    </h3>
                  </div>

                  <p>
                    <?= $package['descricaoCurso'] ?>
                  </p>

                  <div class="btn-anchor-carousel">
                    <a href="cursosIdiomas/ver/<?= $package['idCurso'] ?>">saiba mais</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>

  <div class="box-title-section">
    <h5>Alemão</h5>
  </div>
  <div class="container">
    <div id="carousel-idiomas-desktop" class="oneSlide swiperCarouselIdiomas">
      <div class="swiper-wrapper">
        <?php foreach ($germanCourses as $package): ?>
          <div class="swiper-slide">
            <div class="item"
              style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(<?= $package['linkImagem'] ?>); background-repeat: no-repeat; background-size: cover; background-position: center;">
              <div class="dados-depoimento box-right">
                <div class="box-textos-motivos">
                  <div class="d-flex">
                    <h3>
                      <?= $package['nomeCurso'] ?> ✦
                    </h3>
                  </div>

                  <p>
                    <?= $package['descricaoCurso'] ?>
                  </p>

                  <div class="btn-anchor-carousel">
                    <a href="cursosIdiomas/ver/<?= $package['idCurso'] ?>">saiba mais</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>

    </div>
  </div>
</section>

<?php require './application/views/template/cards-packs.php' ?>

<?php require './application/views/template/form-question.php' ?>