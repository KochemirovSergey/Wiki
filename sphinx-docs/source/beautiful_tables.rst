Примеры красивых таблиц
=======================

Этот файл демонстрирует различные способы создания красивых интерактивных таблиц в Sphinx с фильтрами, сортировкой и цветными ячейками.

1. Базовая интерактивная таблица
--------------------------------

.. csv-table:: Основные показатели системы
   :header: "Компонент", "Статус", "Производительность", "Приоритет"
   :class: sphinx-datatable
   
   "GraphRAG", "Активен", "95%", "Высокий"
   "NLP Модуль", "Активен", "87%", "Высокий"
   "База данных Neo4j", "Активен", "92%", "Критический"
   "Веб-интерфейс", "Разработка", "70%", "Средний"
   "Telegram Bot", "Тестирование", "85%", "Средний"
   "API Gateway", "Планирование", "0%", "Низкий"

2. Таблица с цветными статусами
-------------------------------

.. list-table:: Статус модулей системы
   :header-rows: 1
   :class: sphinx-datatable
   
   * - Модуль
     - Статус
     - Описание
   * - Обработка данных
     - .. rst-class:: bg-green
       
       Готово
     - Модуль полностью функционален
   * - Машинное обучение
     - .. rst-class:: bg-yellow
       
       В разработке
     - Требует дополнительного тестирования
   * - Интеграция с внешними API
     - .. rst-class:: bg-red
       
       Ошибка
     - Проблемы с подключением
   * - Система мониторинга
     - .. rst-class:: bg-blue
       
       Планируется
     - В очереди на разработку

3. Сложная таблица с финансовыми показателями
---------------------------------------------

.. csv-table:: Финансовые показатели проекта (тыс. руб.)
   :header: "Показатель", "2024", "2025", "2026", "Статус", "Комментарий"
   :class: sphinx-datatable
   :widths: 25, 15, 15, 15, 15, 15
   
   "Выручка", "0", "15000", "45000", "Прогноз", "Консервативный сценарий"
   "Операционные расходы", "8000", "12000", "18000", "Планируется", "Включая зарплаты и инфраструктуру"
   "Маркетинг", "2000", "3000", "5000", "Утверждено", "Цифровые каналы продвижения"
   "EBITDA", "-10000", "0", "22000", "Целевой", "Выход в прибыль к концу 2025"
   "Инвестиции в R&D", "5000", "8000", "10000", "Критично", "Развитие AI-алгоритмов"

4. Свертываемая таблица с техническими характеристиками
--------------------------------------------------------

.. raw:: html

   <details>
     <summary>Показать подробные технические характеристики</summary>
     <div class="content">

.. csv-table:: Технические характеристики компонентов
   :header: "Компонент", "Технология", "Версия", "Нагрузка", "Статус"
   :class: sphinx-datatable
   
   "Neo4j Database", "Graph Database", "5.15.0", "До 10M узлов", "Стабильно"
   "Python Backend", "FastAPI + Uvicorn", "0.104.1", "1000 req/sec", "Оптимизировано"
   "AI/ML Pipeline", "PyTorch + Transformers", "4.36.0", "100 запросов/мин", "Тестируется"
   "Frontend", "React + TypeScript", "18.2.0", "Неограничено", "В разработке"
   "Мониторинг", "Grafana + Prometheus", "10.2.0", "24/7", "Настройка"

.. raw:: html

     </div>
   </details>

5. Таблица сравнения конкурентов
--------------------------------

.. list-table:: Сравнительный анализ решений
   :header-rows: 1
   :class: sphinx-datatable
   :widths: 20, 15, 15, 15, 15, 20
   
   * - Решение
     - Цена (руб/мес)
     - Точность
     - Скорость
     - Интеграция
     - Оценка
   * - Наше решение
     - 50 000
     - .. rst-class:: bg-green
       
       95%
     - .. rst-class:: bg-green
       
       Высокая
     - .. rst-class:: bg-green
       
       Полная
     - .. rst-class:: bg-green
       
       Отлично
   * - Конкурент А
     - 120 000
     - .. rst-class:: bg-yellow
       
       87%
     - .. rst-class:: bg-yellow
       
       Средняя
     - .. rst-class:: bg-red
       
       Ограниченная
     - .. rst-class:: bg-yellow
       
       Хорошо
   * - Конкурент Б
     - 200 000
     - .. rst-class:: bg-blue
       
       92%
     - .. rst-class:: bg-red
       
       Низкая
     - .. rst-class:: bg-yellow
       
       Средняя
     - .. rst-class:: bg-orange
       
       Удовлетворительно
   * - Конкурент В
     - 80 000
     - .. rst-class:: bg-red
       
       75%
     - .. rst-class:: bg-green
       
       Высокая
     - .. rst-class:: bg-blue
       
       Хорошая
     - .. rst-class:: bg-red
       
       Неудовлетворительно

6. Таблица с дорожной картой проекта
------------------------------------

.. csv-table:: Дорожная карта развития (по кварталам)
   :header: "Этап", "Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025", "Статус"
   :class: sphinx-datatable
   
   "MVP разработка", "Завершено", "Завершено", "", "", "Готово"
   "Альфа-тестирование", "", "В процессе", "Планируется", "", "Активно"
   "Бета-версия", "", "", "Планируется", "Планируется", "Ожидается"
   "Коммерческий запуск", "", "", "", "Цель", "На контроле"
   "Масштабирование", "", "", "", "Начало", "Долгосрочно"

Инструкции по использованию
---------------------------

Для использования этих таблиц в вашей документации:

1. **Базовые интерактивные таблицы**: Используйте класс ``sphinx-datatable`` для любой таблицы
2. **Цветные ячейки**: Доступны классы ``bg-red``, ``bg-green``, ``bg-yellow``, ``bg-blue``, ``bg-orange``, ``bg-purple``
3. **Свертывание**: Оберните таблицы в HTML-блок ``<details>``
4. **Ширина колонок**: Используйте параметр ``:widths:`` для управления шириной

Все таблицы автоматически получат:

- Функцию поиска и фильтрации
- Сортировку по колонкам
- Пагинацию для больших таблиц
- Адаптивный дизайн для мобильных устройств

7. Таблица с расширенными фильтрами
-----------------------------------

.. raw:: html

   <div class="filter-controls">
     <div class="filter-group">
       <label>Фильтр по статусу:</label>
       <select id="statusFilter" onchange="filterTable('dataTable1', 'status', this.value)">
         <option value="">Все</option>
         <option value="Активен">Активен</option>
         <option value="В разработке">В разработке</option>
         <option value="Планируется">Планируется</option>
         <option value="Тестирование">Тестирование</option>
       </select>
     </div>
     <div class="filter-group">
       <label>Фильтр по приоритету:</label>
       <select id="priorityFilter" onchange="filterTable('dataTable1', 'priority', this.value)">
         <option value="">Все</option>
         <option value="Критический">Критический</option>
         <option value="Высокий">Высокий</option>
         <option value="Средний">Средний</option>
         <option value="Низкий">Низкий</option>
       </select>
     </div>
     <div class="filter-group">
       <label>Производительность от:</label>
       <input type="number" id="performanceMin" min="0" max="100" placeholder="0" onchange="filterTableByRange('dataTable1')">
       <label>до:</label>
       <input type="number" id="performanceMax" min="0" max="100" placeholder="100" onchange="filterTableByRange('dataTable1')">
     </div>
     <button onclick="clearAllFilters('dataTable1')" class="clear-filters-btn">Очистить фильтры</button>
   </div>

.. raw:: html

   <table id="dataTable1" class="sphinx-datatable advanced-table">
     <thead>
       <tr>
         <th>Компонент</th>
         <th>Статус</th>
         <th>Производительность (%)</th>
         <th>Приоритет</th>
         <th>Команда</th>
         <th>Дедлайн</th>
       </tr>
     </thead>
     <tbody>
       <tr data-status="Активен" data-priority="Критический" data-performance="92">
         <td>База данных Neo4j</td>
         <td><span class="status-active">Активен</span></td>
         <td><span class="performance-high">92%</span></td>
         <td><span class="priority-critical">Критический</span></td>
         <td>Backend Team</td>
         <td>2025-03-01</td>
       </tr>
       <tr data-status="Активен" data-priority="Высокий" data-performance="95">
         <td>GraphRAG</td>
         <td><span class="status-active">Активен</span></td>
         <td><span class="performance-high">95%</span></td>
         <td><span class="priority-high">Высокий</span></td>
         <td>AI Team</td>
         <td>2025-02-15</td>
       </tr>
       <tr data-status="Активен" data-priority="Высокий" data-performance="87">
         <td>NLP Модуль</td>
         <td><span class="status-active">Активен</span></td>
         <td><span class="performance-good">87%</span></td>
         <td><span class="priority-high">Высокий</span></td>
         <td>AI Team</td>
         <td>2025-04-01</td>
       </tr>
       <tr data-status="В разработке" data-priority="Средний" data-performance="70">
         <td>Веб-интерфейс</td>
         <td><span class="status-dev">В разработке</span></td>
         <td><span class="performance-medium">70%</span></td>
         <td><span class="priority-medium">Средний</span></td>
         <td>Frontend Team</td>
         <td>2025-05-01</td>
       </tr>
       <tr data-status="Тестирование" data-priority="Средний" data-performance="85">
         <td>Telegram Bot</td>
         <td><span class="status-test">Тестирование</span></td>
         <td><span class="performance-good">85%</span></td>
         <td><span class="priority-medium">Средний</span></td>
         <td>Integration Team</td>
         <td>2025-03-15</td>
       </tr>
       <tr data-status="Планируется" data-priority="Низкий" data-performance="0">
         <td>API Gateway</td>
         <td><span class="status-planned">Планируется</span></td>
         <td><span class="performance-low">0%</span></td>
         <td><span class="priority-low">Низкий</span></td>
         <td>Backend Team</td>
         <td>2025-06-01</td>
       </tr>
       <tr data-status="В разработке" data-priority="Высокий" data-performance="45">
         <td>Система мониторинга</td>
         <td><span class="status-dev">В разработке</span></td>
         <td><span class="performance-low">45%</span></td>
         <td><span class="priority-high">Высокий</span></td>
         <td>DevOps Team</td>
         <td>2025-04-15</td>
       </tr>
     </tbody>
   </table>

8. Таблица с группировкой и сворачиванием строк
-----------------------------------------------

.. raw:: html

   <div class="grouped-table-container">
     <div class="group-controls">
       <button onclick="expandAllGroups()" class="expand-btn">Развернуть все</button>
       <button onclick="collapseAllGroups()" class="collapse-btn">Свернуть все</button>
     </div>

.. raw:: html

   <table class="sphinx-datatable grouped-table">
     <thead>
       <tr>
         <th>Показатель</th>
         <th>Значение</th>
         <th>Изменение</th>
         <th>Статус</th>
         <th>Комментарий</th>
       </tr>
     </thead>
     <tbody>
       <!-- Группа: Финансовые показатели -->
       <tr class="group-header" onclick="toggleGroup('finance-group')" data-group="finance">
         <td colspan="5">
           <span class="group-toggle">▼</span>
           <strong>💰 Финансовые показатели</strong>
           <span class="group-count">(5 показателей)</span>
         </td>
       </tr>
       <tr class="group-row finance-group">
         <td class="sub-item">Выручка (тыс. руб.)</td>
         <td>15,000</td>
         <td class="positive">+25%</td>
         <td><span class="status-active">План</span></td>
         <td>Рост по плану</td>
       </tr>
       <tr class="group-row finance-group">
         <td class="sub-item">EBITDA (тыс. руб.)</td>
         <td>3,500</td>
         <td class="positive">+180%</td>
         <td><span class="status-active">Превышение</span></td>
         <td>Превышение плана</td>
       </tr>
       <tr class="group-row finance-group">
         <td class="sub-item">Операционные расходы</td>
         <td>11,500</td>
         <td class="negative">+5%</td>
         <td><span class="status-test">Контроль</span></td>
         <td>В рамках бюджета</td>
       </tr>
       <tr class="group-row finance-group">
         <td class="sub-item">Маркетинг</td>
         <td>3,000</td>
         <td class="neutral">0%</td>
         <td><span class="status-active">План</span></td>
         <td>По плану</td>
       </tr>
       <tr class="group-row finance-group">
         <td class="sub-item">R&D инвестиции</td>
         <td>8,000</td>
         <td class="positive">+15%</td>
         <td><span class="status-active">Увеличение</span></td>
         <td>Дополнительное финансирование</td>
       </tr>

       <!-- Группа: Технические метрики -->
       <tr class="group-header" onclick="toggleGroup('tech-group')" data-group="tech">
         <td colspan="5">
           <span class="group-toggle">▼</span>
           <strong>⚙️ Технические метрики</strong>
           <span class="group-count">(4 показателя)</span>
         </td>
       </tr>
       <tr class="group-row tech-group">
         <td class="sub-item">Время отклика API (мс)</td>
         <td>125</td>
         <td class="positive">-15%</td>
         <td><span class="status-active">Отлично</span></td>
         <td>Оптимизация сработала</td>
       </tr>
       <tr class="group-row tech-group">
         <td class="sub-item">Точность ML модели (%)</td>
         <td>94.2</td>
         <td class="positive">+2.3%</td>
         <td><span class="status-active">Улучшение</span></td>
         <td>Новые алгоритмы</td>
       </tr>
       <tr class="group-row tech-group">
         <td class="sub-item">Время обучения (ч)</td>
         <td>3.5</td>
         <td class="positive">-40%</td>
         <td><span class="status-active">Ускорение</span></td>
         <td>Оптимизация pipeline</td>
       </tr>
       <tr class="group-row tech-group">
         <td class="sub-item">Покрытие тестами (%)</td>
         <td>87</td>
         <td class="positive">+12%</td>
         <td><span class="status-test">Растёт</span></td>
         <td>Добавлены unit-тесты</td>
       </tr>

       <!-- Группа: Пользовательские метрики -->
       <tr class="group-header" onclick="toggleGroup('user-group')" data-group="user">
         <td colspan="5">
           <span class="group-toggle">▼</span>
           <strong>👥 Пользовательские метрики</strong>
           <span class="group-count">(3 показателя)</span>
         </td>
       </tr>
       <tr class="group-row user-group">
         <td class="sub-item">Активные пользователи</td>
         <td>1,250</td>
         <td class="positive">+35%</td>
         <td><span class="status-active">Рост</span></td>
         <td>Успешный маркетинг</td>
       </tr>
       <tr class="group-row user-group">
         <td class="sub-item">Удержание пользователей (%)</td>
         <td>78</td>
         <td class="positive">+8%</td>
         <td><span class="status-active">Хорошо</span></td>
         <td>Улучшение UX</td>
       </tr>
       <tr class="group-row user-group">
         <td class="sub-item">Средняя сессия (мин)</td>
         <td>12.5</td>
         <td class="negative">-5%</td>
         <td><span class="status-dev">Анализ</span></td>
         <td>Требует исследования</td>
       </tr>
     </tbody>
   </table>

.. raw:: html

   </div>

9. Интерактивная таблица с поиском и множественными фильтрами
-------------------------------------------------------------

.. raw:: html

   <div class="advanced-filter-container">
     <div class="search-section">
       <input type="text" id="globalSearch" placeholder="🔍 Поиск по всем полям..." onkeyup="globalSearchTable('advancedTable')">
     </div>
     
     <div class="multi-filter-section">
       <div class="filter-row">
         <div class="filter-col">
           <label>Регион:</label>
           <select multiple id="regionFilter" onchange="applyMultipleFilters('advancedTable')">
             <option value="Москва">Москва</option>
             <option value="СПб">Санкт-Петербург</option>
             <option value="Регионы">Регионы</option>
           </select>
         </div>
         <div class="filter-col">
           <label>Тип учреждения:</label>
           <select multiple id="typeFilter" onchange="applyMultipleFilters('advancedTable')">
             <option value="Университет">Университет</option>
             <option value="Колледж">Колледж</option>
             <option value="Школа">Школа</option>
           </select>
         </div>
         <div class="filter-col">
           <label>Аккредитация:</label>
           <select multiple id="accredFilter" onchange="applyMultipleFilters('advancedTable')">
             <option value="Есть">Есть</option>
             <option value="В процессе">В процессе</option>
             <option value="Отсутствует">Отсутствует</option>
           </select>
         </div>
       </div>
       <div class="filter-actions">
         <button onclick="selectAllFilters()" class="filter-btn">Выбрать все</button>
         <button onclick="clearAllAdvancedFilters('advancedTable')" class="filter-btn">Очистить</button>
         <button onclick="exportFilteredData('advancedTable')" class="filter-btn export-btn">Экспорт</button>
       </div>
     </div>
   </div>

.. raw:: html

   <table id="advancedTable" class="sphinx-datatable advanced-search-table">
     <thead>
       <tr>
         <th>Учреждение</th>
         <th>Регион</th>
         <th>Тип</th>
         <th>Студентов</th>
         <th>Аккредитация</th>
         <th>Рейтинг</th>
         <th>Бюджет (млн руб)</th>
       </tr>
     </thead>
     <tbody>
       <tr data-region="Москва" data-type="Университет" data-accred="Есть">
         <td>МГУ им. Ломоносова</td>
         <td>Москва</td>
         <td>Университет</td>
         <td>40,000</td>
         <td><span class="accred-yes">Есть</span></td>
         <td class="rating-excellent">98</td>
         <td>15,500</td>
       </tr>
       <tr data-region="СПб" data-type="Университет" data-accred="Есть">
         <td>СПбГУ</td>
         <td>СПб</td>
         <td>Университет</td>
         <td>32,000</td>
         <td><span class="accred-yes">Есть</span></td>
         <td class="rating-excellent">95</td>
         <td>12,800</td>
       </tr>
       <tr data-region="Москва" data-type="Университет" data-accred="Есть">
         <td>МФТИ</td>
         <td>Москва</td>
         <td>Университет</td>
         <td>7,500</td>
         <td><span class="accred-yes">Есть</span></td>
         <td class="rating-excellent">94</td>
         <td>8,200</td>
       </tr>
       <tr data-region="Регионы" data-type="Университет" data-accred="Есть">
         <td>КФУ</td>
         <td>Регионы</td>
         <td>Университет</td>
         <td>45,000</td>
         <td><span class="accred-yes">Есть</span></td>
         <td class="rating-good">88</td>
         <td>6,700</td>
       </tr>
       <tr data-region="Москва" data-type="Колледж" data-accred="Есть">
         <td>Колледж информатики</td>
         <td>Москва</td>
         <td>Колледж</td>
         <td>2,500</td>
         <td><span class="accred-yes">Есть</span></td>
         <td class="rating-good">82</td>
         <td>450</td>
       </tr>
       <tr data-region="СПб" data-type="Колледж" data-accred="В процессе">
         <td>Политехнический колледж</td>
         <td>СПб</td>
         <td>Колледж</td>
         <td>3,200</td>
         <td><span class="accred-process">В процессе</span></td>
         <td class="rating-fair">75</td>
         <td>380</td>
       </tr>
       <tr data-region="Регионы" data-type="Школа" data-accred="Отсутствует">
         <td>Лицей №1</td>
         <td>Регионы</td>
         <td>Школа</td>
         <td>850</td>
         <td><span class="accred-no">Отсутствует</span></td>
         <td class="rating-fair">71</td>
         <td>95</td>
       </tr>
     </tbody>
   </table>