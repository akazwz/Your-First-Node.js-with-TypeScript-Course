// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="preface.html">前言</a></li><li class="chapter-item expanded "><a href="1/1.html"><strong aria-hidden="true">1.</strong> Hello Node.js v20</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="1/1.1.html"><strong aria-hidden="true">1.1.</strong> Node.js v20</a></li><li class="chapter-item expanded "><a href="1/1.2.html"><strong aria-hidden="true">1.2.</strong> Node.js安装</a></li><li class="chapter-item expanded "><a href="1/1.3.html"><strong aria-hidden="true">1.3.</strong> Node.js模块</a></li><li class="chapter-item expanded "><a href="1/1.4.html"><strong aria-hidden="true">1.4.</strong> 第一个Node.js v20项目</a></li><li class="chapter-item expanded "><a href="1/1.5.html"><strong aria-hidden="true">1.5.</strong> 本章小结</a></li></ol></li><li class="chapter-item expanded "><a href="2/2.html"><strong aria-hidden="true">2.</strong> Hello TypeScript</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2/2.1.html"><strong aria-hidden="true">2.1.</strong> TypeScript是什么</a></li><li class="chapter-item expanded "><a href="2/2.2.html"><strong aria-hidden="true">2.2.</strong> TypeScript安装</a></li><li class="chapter-item expanded "><a href="2/2.3.html"><strong aria-hidden="true">2.3.</strong> TypeScript基础</a></li><li class="chapter-item expanded "><a href="2/2.4.html"><strong aria-hidden="true">2.4.</strong> TypeScript进阶</a></li><li class="chapter-item expanded "><a href="2/2.5.html"><strong aria-hidden="true">2.5.</strong> 本章小结</a></li></ol></li><li class="chapter-item expanded "><a href="3/3.html"><strong aria-hidden="true">3.</strong> 你的第一个TS编写的Node.js项目</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="3/3.1.html"><strong aria-hidden="true">3.1.</strong> 项目实战</a></li><li class="chapter-item expanded "><a href="3/3.2.html"><strong aria-hidden="true">3.2.</strong> Tsx编译</a></li><li class="chapter-item expanded "><a href="3/3.3.html"><strong aria-hidden="true">3.3.</strong> TSDoc文档</a></li><li class="chapter-item expanded "><a href="3/3.4.html"><strong aria-hidden="true">3.4.</strong> Tsup发布</a></li><li class="chapter-item expanded "><a href="3/3.5.html"><strong aria-hidden="true">3.5.</strong> 本章小结</a></li></ol></li><li class="chapter-item expanded "><a href="4/4.html"><strong aria-hidden="true">4.</strong> 用VSCode调试项目</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="4/4.1.html"><strong aria-hidden="true">4.1.</strong> VSCode+Cursor必杀技</a></li><li class="chapter-item expanded "><a href="4/4.2.html"><strong aria-hidden="true">4.2.</strong> Node.js调试</a></li><li class="chapter-item expanded "><a href="4/4.3.html"><strong aria-hidden="true">4.3.</strong> TS+Node.js调试</a></li><li class="chapter-item expanded "><a href="4/4.4.html"><strong aria-hidden="true">4.4.</strong> 本章小结</a></li></ol></li><li class="chapter-item expanded "><a href="5/5.html"><strong aria-hidden="true">5.</strong> 给Node.js项目增加TS测试</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="5/5.1.html"><strong aria-hidden="true">5.1.</strong> 增加TS测试</a></li><li class="chapter-item expanded "><a href="5/5.2.html"><strong aria-hidden="true">5.2.</strong> 常用测试技巧进阶</a></li><li class="chapter-item expanded "><a href="5/5.3.html"><strong aria-hidden="true">5.3.</strong> 学会CI/CD</a></li><li class="chapter-item expanded "><a href="5/5.4.html"><strong aria-hidden="true">5.4.</strong> 本章小结</a></li></ol></li><li class="chapter-item expanded "><a href="6/6.html"><strong aria-hidden="true">6.</strong> Menorepo多模块开发实践</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="6/6.1.html"><strong aria-hidden="true">6.1.</strong> 开发你的第一个模块</a></li><li class="chapter-item expanded "><a href="6/6.2.html"><strong aria-hidden="true">6.2.</strong> 开源最佳实践</a></li><li class="chapter-item expanded "><a href="6/6.3.html"><strong aria-hidden="true">6.3.</strong> 如何学习</a></li><li class="chapter-item expanded "><a href="6/6.4.html"><strong aria-hidden="true">6.4.</strong> 本章小结</a></li></ol></li><li class="chapter-item expanded "><a href="7/7.html"><strong aria-hidden="true">7.</strong> 使用Hono做Web开发</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="7/7.1.html"><strong aria-hidden="true">7.1.</strong> Hono框架</a></li><li class="chapter-item expanded "><a href="7/7.2.html"><strong aria-hidden="true">7.2.</strong> 使用ORpc + Scalar做API开发</a></li><li class="chapter-item expanded "><a href="7/7.3.html"><strong aria-hidden="true">7.3.</strong> 使用Cella开发Web应用</a></li><li class="chapter-item expanded "><a href="7/7.4.html"><strong aria-hidden="true">7.4.</strong> 监控Apitally</a></li><li class="chapter-item expanded "><a href="7/7.5.html"><strong aria-hidden="true">7.5.</strong> 本章小结</a></li></ol></li><li class="chapter-item expanded "><a href="appendix.html"><strong aria-hidden="true">8.</strong> 附录</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
