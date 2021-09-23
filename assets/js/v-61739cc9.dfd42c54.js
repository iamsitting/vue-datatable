"use strict";(self.webpackChunkvue_good_table_next=self.webpackChunkvue_good_table_next||[]).push([[5810],{7190:(n,a,s)=>{s.r(a),s.d(a,{default:()=>i});var t=s(6252);const e=(0,t.uE)('<h1 id="pagination-options" tabindex="-1"><a class="header-anchor" href="#pagination-options" aria-hidden="true">#</a> Pagination Options</h1><p>A set of options that are related to table pagination. Each of these are optional and reasonable defaults will be used if you leave off the property.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    mode: <span class="token punctuation">&#39;</span>records<span class="token punctuation">&#39;</span>,\n    perPage: 5,\n    position: <span class="token punctuation">&#39;</span>top<span class="token punctuation">&#39;</span>,\n    perPageDropdown: [3, 7, 9],\n    dropdownAllowAll: false,\n    setCurrentPage: 2,\n    nextLabel: <span class="token punctuation">&#39;</span>next<span class="token punctuation">&#39;</span>,\n    prevLabel: <span class="token punctuation">&#39;</span>prev<span class="token punctuation">&#39;</span>,\n    rowsPerPageLabel: <span class="token punctuation">&#39;</span>Rows per page<span class="token punctuation">&#39;</span>,\n    ofLabel: <span class="token punctuation">&#39;</span>of<span class="token punctuation">&#39;</span>,\n    pageLabel: <span class="token punctuation">&#39;</span>page<span class="token punctuation">&#39;</span>, // for <span class="token punctuation">&#39;</span>pages<span class="token punctuation">&#39;</span> mode\n    allLabel: <span class="token punctuation">&#39;</span>All<span class="token punctuation">&#39;</span>,\n    infoFn: (params) =&gt; `my own page ${params.firstRecordOnPage}`, \n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="enabled" tabindex="-1"><a class="header-anchor" href="#enabled" aria-hidden="true">#</a> enabled</h2><p>type: <code>Boolean (default: false)</code></p><p>Enable Pagination for table. By default the paginator is created at the bottom of the table.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="mode" tabindex="-1"><a class="header-anchor" href="#mode" aria-hidden="true">#</a> mode</h2><p>type: <code>String (default: &#39;records&#39;)</code></p><p>You can render pagination controls in two modes - &#39;records&#39; and &#39;pages&#39;. Below, you&#39;ll find examples of both.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>For tables that may have many pages, &#39;pages&#39; mode offers the ability to jump to any valid page.</p></div><h3 id="records-mode-default" tabindex="-1"><a class="header-anchor" href="#records-mode-default" aria-hidden="true">#</a> records mode (default)</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    mode: <span class="token punctuation">&#39;</span>records<span class="token punctuation">&#39;</span>\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',13),p=(0,t.uE)('<h3 id="pages-mode" tabindex="-1"><a class="header-anchor" href="#pages-mode" aria-hidden="true">#</a> pages mode</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    mode: <span class="token punctuation">&#39;</span>pages<span class="token punctuation">&#39;</span>\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',2),o=(0,t.uE)('<h2 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> position</h2><p>type: <code>String (default: &#39;bottom&#39;)</code></p><p>Add pagination on &#39;top&#39; or &#39;bottom&#39; (top and bottom) of the table (default position is bottom)</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    position: <span class="token punctuation">&#39;</span>top<span class="token punctuation">&#39;</span>\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="perpage" tabindex="-1"><a class="header-anchor" href="#perpage" aria-hidden="true">#</a> perPage</h2><p>type: <code>Integer (default: 10)</code></p><p>Number of rows to show per page</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    perPage: 5\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="perpagedropdownenabled" tabindex="-1"><a class="header-anchor" href="#perpagedropdownenabled" aria-hidden="true">#</a> perPageDropdownEnabled</h2><p>type: <code>Boolean (default: true)</code></p><p>Show or hide the per page dropdown</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    perPageDropdownEnabled: false,\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="perpagedropdown" tabindex="-1"><a class="header-anchor" href="#perpagedropdown" aria-hidden="true">#</a> perPageDropdown</h2><p>type: <code>Array (default: [10,20,30,40,50])</code></p><p>Customize the dropdown options for the amount of items per page</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    perPageDropdown: [3, 7, 9]\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="dropdownallowall" tabindex="-1"><a class="header-anchor" href="#dropdownallowall" aria-hidden="true">#</a> dropdownAllowAll</h2><p>type: <code>Boolean (default: true)</code></p><p>enables/disables &#39;All&#39; in the per page dropdown.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    perPageDropdown: [3, 7, 9],\n    dropdownAllowAll: false,\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="setcurrentpage" tabindex="-1"><a class="header-anchor" href="#setcurrentpage" aria-hidden="true">#</a> setCurrentPage</h2><p>type: <code>Number</code></p><p>set current page programmatically.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>There&#39;s no validation for number of pages so please be careful using this.</p></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    setCurrentPage: 2,\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="pagination-label-text-options" tabindex="-1"><a class="header-anchor" href="#pagination-label-text-options" aria-hidden="true">#</a> pagination label/text options</h2><p>you can change one or more of the texts shown on pagination by overriding the labels in the following way:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    nextLabel: <span class="token punctuation">&#39;</span>next<span class="token punctuation">&#39;</span>,\n    prevLabel: <span class="token punctuation">&#39;</span>prev<span class="token punctuation">&#39;</span>,\n    rowsPerPageLabel: <span class="token punctuation">&#39;</span>Rows per page<span class="token punctuation">&#39;</span>,\n    ofLabel: <span class="token punctuation">&#39;</span>of<span class="token punctuation">&#39;</span>,\n    pageLabel: <span class="token punctuation">&#39;</span>page<span class="token punctuation">&#39;</span>, // for <span class="token punctuation">&#39;</span>pages<span class="token punctuation">&#39;</span> mode\n    allLabel: <span class="token punctuation">&#39;</span>All<span class="token punctuation">&#39;</span>,\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="infofn" tabindex="-1"><a class="header-anchor" href="#infofn" aria-hidden="true">#</a> InfoFn</h3><p>Provide your own function to lay out pagination info how you like:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-good-table</span>\n  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rows<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:pagination-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n    enabled: true,\n    infoFn: (params) =&gt; `Showing ${params.firstRecordOnPage} to ${params.lastRecordOnPage} of page ${params.currentPage}`,\n  }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-good-table</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>the parameters passed to infoFn are the following:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  firstRecordOnPage<span class="token operator">:</span> <span class="token string">&#39;index of the first record on the current page&#39;</span><span class="token punctuation">,</span>\n  lastRecordOnPage<span class="token operator">:</span> <span class="token string">&#39;index of the last record on the current page&#39;</span><span class="token punctuation">,</span>\n  totalRecords<span class="token operator">:</span> <span class="token string">&#39;total number of records&#39;</span><span class="token punctuation">,</span>\n  currentPage<span class="token operator">:</span> <span class="token string">&#39;current page&#39;</span><span class="token punctuation">,</span>\n  totalPage<span class="token operator">:</span> <span class="token string">&#39;total number of pages&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="replace-pagination-component" tabindex="-1"><a class="header-anchor" href="#replace-pagination-component" aria-hidden="true">#</a> Replace Pagination Component</h2>',34),l=(0,t.Uk)("you can also replace the pagination component with your own component - "),u={href:"/guide/advanced/#custom-pagination",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("Custom Pagination"),r={},i=(0,s(3744).Z)(r,[["render",function(n,a){const s=(0,t.up)("pagination-table"),r=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("p",null,[(0,t.Wm)(s,{options:{enabled:!0,mode:"records",perPage:2}})]),p,(0,t._)("p",null,[(0,t.Wm)(s,{options:{enabled:!0,mode:"pages",perPage:2}})]),o,(0,t._)("p",null,[l,(0,t._)("a",u,[c,(0,t.Wm)(r)])])],64)}]])},8300:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-61739cc9",path:"/guide/configuration/pagination-options.html",title:"Pagination Options",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"enabled",slug:"enabled",children:[]},{level:2,title:"mode",slug:"mode",children:[{level:3,title:"records mode (default)",slug:"records-mode-default",children:[]},{level:3,title:"pages mode",slug:"pages-mode",children:[]}]},{level:2,title:"position",slug:"position",children:[]},{level:2,title:"perPage",slug:"perpage",children:[]},{level:2,title:"perPageDropdownEnabled",slug:"perpagedropdownenabled",children:[]},{level:2,title:"perPageDropdown",slug:"perpagedropdown",children:[]},{level:2,title:"dropdownAllowAll",slug:"dropdownallowall",children:[]},{level:2,title:"setCurrentPage",slug:"setcurrentpage",children:[]},{level:2,title:"pagination label/text options",slug:"pagination-label-text-options",children:[{level:3,title:"InfoFn",slug:"infofn",children:[]}]},{level:2,title:"Replace Pagination Component",slug:"replace-pagination-component",children:[]}],filePathRelative:"guide/configuration/pagination-options.md",git:{updatedTime:1614453666e3,contributors:[{name:"Akshay Anand",email:"aks9800@gmail.com",commits:6}]}}}}]);