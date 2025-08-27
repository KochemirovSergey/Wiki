<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# sphinx-docs как в моей документации сделать красивую таблицу? чтобы строки сворачивались, были фильтры и цветные ячейки

Чтобы добавить интерактивные и стилизованные таблицы в документацию Sphinx с возможностью фильтрации, сортировки, свертывания строк и цветных ячеек, рассмотрите такие способы:

***

## 1. Интерактивные таблицы с сортировкой и фильтрами

**Лучшее решение для HTML — расширение sphinx-datatables:**

- Установите расширение:

```bash
pip install sphinx-datatables sphinxcontrib-jquery
```

- Добавьте его в `conf.py`:

```python
extensions = [
    "sphinxcontrib.jquery",
    "sphinx_datatables",
]
```

- В `.rst` файле создайте таблицу с классом:

```rst
.. csv-table:: Моя таблица
   :header: Название, Параметр, Статус
   :class: sphinx-datatable

   Фильтр 1, 25, ok
   Фильтр 2, 37, fail
   ...
```

- Таблица станет интерактивной: можно фильтровать и сортировать по столбцам, а отображение можно настраивать через параметры конфигурации.[^1][^2]

***

## 2. Цветные ячейки и строки

В Sphinx можно сделать цветные элементы с помощью пользовательских CSS-классов:

- Для HTML используйте директиву `:class:` в таблице или отдельных строках/ячейках:

```rst
.. list-table::
   :header-rows: 1
   :class: mytable

   * - Название
     - Статус
   * - Данные 1
     - .. rst-class:: bg-red
        Ошибка
   * - Данные 2
     - .. rst-class:: bg-green
        Успех
```

- В своем CSS:

```css
.bg-red { background: #ffdddd !important; }
.bg-green { background: #ddffdd !important; }
```


**Для всех строк или ячеек также можно использовать селекторы типа `:nth-child` и задать свои стили для выделения отдельных элементов**.[^3]

***

## 3. Свертывающиеся строки или блоки

**Прямо в таблицах свертывание редко поддерживается.** Лучше использовать директиву `dropdown` или `details` для секций — например, помещайте таблицу внутри блока:

```rst
.. dropdown:: Подробнее о таблице

   .. csv-table::
      :header: Кол1,Кол2
      :class: sphinx-datatable

      a,1
      b,2
```

или через HTML:

```rst
.. raw:: html

   <details>
     <summary>Показать таблицу</summary>
     <table class="sphinx-datatable">
        ...
     </table>
   </details>
```

**Для сложных таблиц со свертыванием строк — используйте DataTables с расширениями, либо пишите свой js/css.**

***

## 4. Дополнительные фильтры и стили

- Для фильтрации по содержимому используйте параметры DataTables (см. конфиг `datatables_options` в `conf.py`).
- Для многоцветных столбцов/ячеек — определяйте CSS-классы и используйте директиву `:class:` или `.. rst-class::` в таблице.

***

## Итого

- Для большинства задач подходит [sphinx-datatables]: фильтры, сортировка, стили.[^2][^1]
- Для сворачивания — используйте блоки `details` или кастомный JS.
- Для цвета — добавляйте CSS-классы и подключайте свой стиль.

**Пример конфигурируемой таблицы:**

```rst
.. csv-table:: Цветная интерактивная таблица
   :header: Название, Статус
   :class: sphinx-datatable mytable

   Данные 1, .. rst-class:: bg-red Ошибка
   Данные 2, .. rst-class:: bg-green Успех
```

с нужными стилями в `_static/custom.css`.

***

### Полезные расширения:

- sphinx-datatables (интерактивные фильтруемые таблицы).[^1][^2]
- sphinx-markdown-tables (поддержка markdown-таблиц).[^4]
- sphinx-needs (научные таблицы с фильтрами и цветами для технической документации).[^5][^6]

***

**Резюме:**
Для фильтрации/сортировки используйте sphinx-datatables, для цвета — CSS-классы, для сворачивания — details/dropdown-блоки или кастомный JS.

Если нужны шаблоны примеров или настройка — готов дать подробный код под вашу задачу!
<span style="display:none">[^10][^11][^7][^8][^9]</span>

<div style="text-align: center">⁂</div>

[^1]: https://pypi.org/project/sphinx-datatables/

[^2]: https://sharm294.github.io/sphinx-datatables/

[^3]: https://stackoverflow.com/questions/3702865/sphinx-restructuredtext-set-color-for-a-single-word

[^4]: https://github.com/ryanfox/sphinx-markdown-tables

[^5]: https://sphinx-needs.readthedocs.io/en/latest/layout_styles.html

[^6]: https://sphinx-needs.readthedocs.io/en/stable/directives/needtable.html

[^7]: https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html

[^8]: http://sphinxsearch.com/docs/current.html

[^9]: https://github.com/sphinx-doc/sphinx/issues/13635

[^10]: https://www.sphinx-doc.org/en/master/usage/configuration.html

[^11]: https://stackoverflow.com/questions/46193561/sphinx-restructuredtext-color-cell-row-of-a-table

