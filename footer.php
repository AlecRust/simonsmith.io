                </main>
            </div>

            <aside class="layout-aside layout-col-left" role="complementary">
                <h1 class="visuallyhidden">Additional info</h1>
                <section class="about" id="about">
                    <h1 class="hdr-aside">Who</h1>
                    <p>My name is Simon. I make things happen with <abbr title="HyperText Markup Language">HTML</abbr>5, <abbr title="Cascading Style Sheets">CSS</abbr>3, JavaScript and mobile first responsive design</p>
                    <div class="bio-img">
                        <img src="http://www.gravatar.com/avatar/<?= md5('simon@interlopers.net')?>?s=200" width="150" height="150" alt="Photo of Simon Smith" class="img-border">
                    </div>
                </section>
                <section class="contact" id="contact">
                    <h1 class="hdr-aside">Contact</h1>
                    <ul>
                        <li class="email"><a href="mailto:me@simonsmith.io">me@simonsmith.io</a></li>
                        <li class="github"><a href="https://github.com/simonsmith">github</a></li>
                        <li class="twitter"><a href="http://twitter.com/blinkdesign">@blinkdesign</a></li>
                        <li class="stackoverflow"><a href="http://stackoverflow.com/users/617615/simon-smith">stackoverflow</a></li>
                        <li class="linkedin"><a href="http://uk.linkedin.com/in/blinkdesign">linkedin</a></li>
                    </ul>
                </section>
            </aside>
                    
            <footer class="layout-footer layout-col-left footer cf" role="contentinfo">
                <p>Simon Smith <time datetime="<?= date('Y-m-d') ?>"><?= date('Y') ?></time></p>
                <p>View the sauce <a href="https://github.com/simonsmith/blinkdesign">on GitHub</a></p>
            </footer>

        </div>

    </body>
</html>
