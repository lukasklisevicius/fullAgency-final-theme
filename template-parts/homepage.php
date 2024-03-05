<div id="post-<?php the_ID(); ?>" <?php post_class('mb-12'); ?>>
    <!-- VIDEO -->
    <?php
    $video = get_field('video');

    if ($video['desktop']) {
    ?>
        <video id="videoD" class="hidden lg:block z-10 relative opacity-0 w-full h-full object-cover" src="<?php echo $video['desktop']['url']; ?>" loop muted playsinline></video>
    <?php
    }
    if ($video['mobile']) {
    ?>
        <video id="videoM" class="lg:hidden relative opacity-0 w-full h-full object-cover" src="<?php echo $video['mobile']['url']; ?>" loop muted playsinline></video>
    <?php
    }
    ?>

    <!-- MENU -->
    <?php
    $menu = get_field('menu');

    if ($menu) {
    ?>
        <div id="full-menu" class="relative w-full h-full flex items-center flex-col py-32 px-8 opacity-0">
            <?php
            if ($menu['title']) {
            ?><h2 class="uppercase text-2xl font-bold pt-8 md:pt-0"><?php echo $menu['title']; ?></h2><?php
                                                                                                                }
                                                                                                                if ($menu['title_2']) {
                                                                                                                    ?><h1 class="uppercase font-neil text-5xl md:text-4xl"><?php echo $menu['title_2']; ?></h1><?php
                                                                                                                }
                                                                                                                    ?>

            <?php $items = $menu['menu_items'];
            if ($items) {
            ?>
                <div class="my-24 flex flex-col justify-center items-center w-3/4 md:w-2/4 lg:w-1/4 text-center">
                    <?php
                    foreach ($items as $item) {
                    ?>
                        <div class="my-4">
                            <?php
                            if ($item['menu_item_title']) {
                            ?>
                                <h2 class="full-menu-item opacity-0 uppercase font-bold text-2xl"><?php echo $item['menu_item_title']; ?></h2>
                            <?php
                            }
                            if ($item['menu_item_description']) {
                            ?>
                                <p class="full-menu-item opacity-0  "><?php echo $item['menu_item_description']; ?></p>
                            <?php
                            }
                            ?>
                        </div>
                    <?php

                    }
                    ?>
                </div>
            <?php
            }
            ?>

            <?php
            $logos =  $menu['logos'];
            if ($logos) {
            ?>
                <div id="logos" class="w-full flex flex-wrap flex-row items-center justify-center gap-x-8 md:gap-x-16 lg:gap-x-18 gap-y-4">
                    <?php
                    foreach ($logos as $key => $logo) {
                    ?>
                        <img style="--index: <?php echo $key; ?>" class="menu-logo opacity-0 max-w-24 md:max-w-28 lg:max-w-52" src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>" class="">
                    <?php
                    }
                    ?>
                </div>
            <?php
            }
            ?>
        </div>
    <?php
    }
    ?>

    <!-- ROLLING TEXT -->
    <?php
    $rollers = get_field('rolling_text');
    if ($rollers) {
    ?><div id="roller" class="group relative my-12 items-center flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div class=" flex animate-loop-scroll gap-10 items-center pb-8 relative">
                <?php
                foreach ($rollers as $roller) {
                ?><p class="w-fit-content font-neil uppercase whitespace-nowrap text-7xl md:text-[200px]  font-bold block"><?php echo $roller['text']; ?></p>
                    <div class="block w-4 h-4 md:w-8 md:h-8 rounded-full bg-white"></div><?php
                                                                                        }
                                                                                            ?>
            </div>
            <div class=" flex animate-loop-scroll gap-10 items-center pb-8 relative">
                <?php
                foreach ($rollers as $roller) {
                ?><p class="w-fit-content whitespace-nowrap font-neil uppercase text-7xl md:text-[200px]  font-bold block"><?php echo $roller['text']; ?></p>
                    <div class="block w-4 h-4 md:w-8 md:h-8 rounded-full bg-white"></div><?php
                                                                                        }
                                                                                            ?>
            </div>
        </div><?php
            }
                ?>


    <?php
    $projects = get_field('projects');
    if ($projects) {
    ?>
        <div id="projects" class="relative opacity-0 px-8 md:pl-8 md:pr-0 flex flex-col py-32">
            <?php if ($projects['title']) {
            ?>
                <h1 class="uppercase font-bold font-neil absolute text-5xl md:text-4xl"><?php echo $projects['title']; ?></h1>
            <?php
            } ?>
            <?php
            $sliders = $projects['sliders'];
            if ($sliders) {
            ?>
                <div class="swiper  w-full h-[700px]">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper h-[700px]">
                        <!-- Slides -->
                        <?php
                        foreach ($sliders as $key => $slide) {

                        ?>
                            <div class="swiper-slide w-full md:w-3/4 mr-8 group flex flex-col justify-between">
                                <?php
                                if ($slide['project_title']) {
                                ?>
                                    <h2 class="group-[.swiper-slide-active]:xl:left-[270px] group-[.swiper-slide-prev]:opacity-0 project-title relative uppercase font-bold text-4xl  mt-24 xl:mt-0"><?php echo $slide['project_title']; ?> <?php if ($slide['subtitle']) {
                                                                                                                                                                                                                                                echo "<span class='font-normal'>" . $slide['subtitle'] . "</span>";
                                                                                                                                                                                                                                            } ?></h2>
                                <?php
                                }
                                ?>
                                <?php
                                if ($slide['description']) {
                                ?>
                                    <p class=" w-full md:w-3/4 lg:w-3/4 xl:w-2/4 "><?php echo $slide['description']; ?></p>
                                <?php
                                }
                                ?>
                                <?php
                                if ($slide['tags']) {
                                ?>
                                    <div class="flex flex-wrap items-center gap-4 w-full md:w-3/4 lg:w-3/4 xl:w-2/4 ">
                                        <?php foreach ($slide['tags'] as $tag) {
                                            if ($tag['tag']) {
                                        ?>
                                                <p class="uppercase "><?php echo $tag['tag']; ?></p>
                                                <div class="last:hidden block w-2 h-2  rounded-full bg-white"></div>
                                        <?php
                                            }
                                        } ?>
                                    </div>
                                <?php
                                }
                                ?>
                                <?php
                                if ($slide['video__gallery'] == "video") {
                                    if ($slide['video']) {
                                ?>
                                        <video class="project-video w-full h-[350px] xl:w-2/4 lg:w-3/4 md:w-3/4  object-cover object-center [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]" src="<?php echo $slide['video']['url']; ?>" loop muted playsinline></video>
                                <?php
                                    }
                                }
                                ?>
                                <?php
                                if ($slide['video__gallery'] == "gallery") {
                                    if ($slide['gallery']) {
                                ?>
                                        <div class="flex relative w-full h-[350px] xl:w-2/4 lg:w-3/4 md:w-3/4 max-h-[400px] project_gallery img-container [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]" data-slideshow="<?php echo "gallery" . $key; ?>">
                                            <?php
                                            foreach ($slide['gallery'] as $img) {
                                            ?>
                                                <img class="card__img absolute w-full h-full object-center object-cover" src="<?php echo $img['url']; ?>" alt="<?php echo $img['alt']; ?>">
                                            <?php
                                            }
                                            ?>
                                        </div>
                                <?php
                                    }
                                }
                                $i = 0;
                                ?>
                                <script>

                                </script>
                            </div>
                        <?php
                        }
                        ?>
                    </div>
                    <div class="hidden swiper-button-next md:flex md:bg-grey-500 md:w-1/4 md:h-full md:absolute md:top-0 md:right-0 "></div>


                </div>
                <!-- <div class="md:hidden custom-swiper-button-next z-10 font-bold top-[20px] w-full text-center">>>></div> -->
                <script>
                    const swiper = new Swiper('.swiper', {
                        // Optional parameters
                        direction: 'horizontal',
                        loop: true,
                        slidesPerView: 'auto',
                        // Navigation arrows
                        navigation: {
                            nextEl: '.swiper-button-next',
                        },
                        autoplay: {
                            delay: 15000,
                            pauseOnMouseEnter: true,
                        }


                        // And if we need scrollbar
                        // scrollbar: {
                        //     el: '.swiper-scrollbar',
                        // },
                    });
                </script>
            <?php
            }
            ?>

        </div>
    <?php
    }
    ?>
    <!-- PROJECTS -->








    <!-- CONTACTS -->
    <?php
    $contact = get_field('contact');
    if ($contact) {
    ?>
        <div id="contact" class="opacity-0 flex flex-col w-full justify-center items-center px-8 pt-24">
            <?php
            if ($contact['section_title'] || $contact['image'] || $contact['form_short_code']) {
            ?>
                <div class="flex flex-col md:flex-row md:gap-8 lg:gap-24 w-full relative">
                    <?php if ($contact['section_title'] || $contact['image']) {
                    ?>
                        <div class=" w-full text-center md:w-3/5">
                            <?php if ($contact['section_title']) {
                            ?>
                                <h1 class="absolute z-10 font-neil text-2xl lg:text-4xl font-bold w-full md:w-auto text-center mt-8 md:ml-8"><?php echo $contact['section_title']; ?></h1>
                            <?php
                            } ?>
                            <?php if ($contact['image']) {
                            ?>
                                <div class="relative h-[500px] mb-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
                                    <?php
                                    if ($contact['url_on_picture']) {
                                    ?>
                                        <a href="<?php echo $contact['url_on_picture']; ?>" target="blank">
                                            <img class="w-full h-full object-cover" src="<?php echo $contact['image']['url']; ?>" alt="<?php echo $contact['image']['alt']; ?>">
                                        </a>
                                    <?php
                                    } else if ($contact['image']) {
                                    ?>
                                        <img class="w-full h-full object-cover" src="<?php echo $contact['image']['url']; ?>" alt="<?php echo $contact['image']['alt']; ?>">
                                    <?php
                                    }

                                    ?>
                                </div>
                            <?php
                            } ?>
                        </div>
                    <?php
                    } ?>
                    <?php if ($contact['form_short_code']) {
                    ?>
                        <div class="lg:w-2/5 contact__form relative">
                            <?php
                            echo do_shortcode($contact['form_short_code']);
                            ?>
                        </div>
                    <?php
                    } ?>
                </div>
            <?php
            }
            ?>
            <?php
            $columns = $contact['columns'];
            if ($columns) {
            ?>
                <div class="flex flex-col my-16 gap-4 text-xl md:flex-row md:w-full md:justify-around  relative">
                    <?php
                    foreach ($columns as $col) {
                    ?>
                        <div>
                            <?php
                            $lines = $col['lines'];
                            if ($lines) {
                                foreach ($lines as $key => $line) {
                                    if ($line['type'] == 'Email') {
                                        if ($line['email']) {
                            ?>
                                            <a style="--index:<?php echo $key; ?>;" class="contact-item opacity-0 font-bold " href="mailto:<?php echo $line['email']; ?>"><?php echo $line['email']; ?></a>
                                        <?php
                                        }
                                    }
                                    if ($line['type'] == 'Phone') {
                                        if ($line['phone']) {
                                        ?>
                                            <a style="--index:<?php echo $key; ?>;" class="contact-item opacity-0 " href="tel:<?php echo $line['phone']; ?>"><?php echo $line['phone']; ?></a>
                                        <?php
                                        }
                                    }
                                    if ($line['type'] == 'Label') {
                                        if ($line['label']) {
                                        ?>
                                            <p style="--index:<?php echo $key; ?>;" class="contact-item opacity-0 "><?php echo $line['label']; ?></p>
                                            <?php
                                        }
                                    }
                                    if ($line['type'] == 'Label_url') {
                                        if ($line['label_url']) {
                                            if ($line['label_url']['url'] || $line['label_url']['label']) {
                                            ?>
                                                <a style="--index:<?php echo $key; ?>;" class="contact-item opacity-0 " href="<?php echo $line['label_url']['url']; ?>" target="blank"><?php echo $line['label_url']['label']; ?></a>
                            <?php
                                            }
                                        }
                                    }
                                }
                            }
                            ?>
                        </div>
                    <?php
                    }
                    ?>
                </div>
            <?php
            }
            ?>
        </div>
    <?php
    }
    ?>

</div>