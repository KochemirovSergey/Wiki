/**
 * Интерактивная функциональность для расширенных таблиц в Sphinx документации
 * Поддержка фильтрации, группировки и расширенного поиска
 */

// Функции для базовых фильтров
function filterTable(tableId, dataAttribute, value) {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const dataValue = row.getAttribute('data-' + dataAttribute);
        if (value === '' || dataValue === value) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function filterTableByRange(tableId) {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    const minValue = parseInt(document.getElementById('performanceMin').value) || 0;
    const maxValue = parseInt(document.getElementById('performanceMax').value) || 100;
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const performance = parseInt(row.getAttribute('data-performance')) || 0;
        if (performance >= minValue && performance <= maxValue) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function clearAllFilters(tableId) {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    // Очищаем все селекты
    document.getElementById('statusFilter').value = '';
    document.getElementById('priorityFilter').value = '';
    document.getElementById('performanceMin').value = '';
    document.getElementById('performanceMax').value = '';
    
    // Показываем все строки
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        row.style.display = '';
    });
}

// Функции для группированных таблиц
function toggleGroup(groupClass) {
    const rows = document.querySelectorAll('.' + groupClass);
    const toggle = event.currentTarget.querySelector('.group-toggle');
    
    rows.forEach(row => {
        if (row.classList.contains('hidden')) {
            row.classList.remove('hidden');
            toggle.textContent = '▼';
        } else {
            row.classList.add('hidden');
            toggle.textContent = '▶';
        }
    });
}

function expandAllGroups() {
    const groupRows = document.querySelectorAll('.group-row');
    const toggles = document.querySelectorAll('.group-toggle');
    
    groupRows.forEach(row => row.classList.remove('hidden'));
    toggles.forEach(toggle => toggle.textContent = '▼');
}

function collapseAllGroups() {
    const groupRows = document.querySelectorAll('.group-row');
    const toggles = document.querySelectorAll('.group-toggle');
    
    groupRows.forEach(row => row.classList.add('hidden'));
    toggles.forEach(toggle => toggle.textContent = '▶');
}

// Функции для расширенного поиска
function globalSearchTable(tableId) {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    const searchValue = document.getElementById('globalSearch').value.toLowerCase();
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(searchValue)) {
            row.classList.remove('filtered-out');
        } else {
            row.classList.add('filtered-out');
        }
    });
}

function applyMultipleFilters(tableId) {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    const regionFilter = document.getElementById('regionFilter');
    const typeFilter = document.getElementById('typeFilter');
    const accredFilter = document.getElementById('accredFilter');
    
    const selectedRegions = Array.from(regionFilter.selectedOptions).map(opt => opt.value);
    const selectedTypes = Array.from(typeFilter.selectedOptions).map(opt => opt.value);
    const selectedAccreds = Array.from(accredFilter.selectedOptions).map(opt => opt.value);
    
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const regionMatch = selectedRegions.length === 0 || selectedRegions.includes(row.getAttribute('data-region'));
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(row.getAttribute('data-type'));
        const accredMatch = selectedAccreds.length === 0 || selectedAccreds.includes(row.getAttribute('data-accred'));
        
        if (regionMatch && typeMatch && accredMatch) {
            row.classList.remove('filtered-out');
        } else {
            row.classList.add('filtered-out');
        }
    });
}

function selectAllFilters() {
    const selects = document.querySelectorAll('.multi-filter-section select[multiple]');
    selects.forEach(select => {
        Array.from(select.options).forEach(option => option.selected = true);
    });
    applyMultipleFilters('advancedTable');
}

function clearAllAdvancedFilters(tableId) {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    // Очищаем поиск
    document.getElementById('globalSearch').value = '';
    
    // Очищаем множественные фильтры
    const selects = document.querySelectorAll('.multi-filter-section select[multiple]');
    selects.forEach(select => {
        Array.from(select.options).forEach(option => option.selected = false);
    });
    
    // Показываем все строки
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        row.classList.remove('filtered-out');
    });
}

function exportFilteredData(tableId) {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    const visibleRows = table.querySelectorAll('tbody tr:not(.filtered-out)');
    const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent);
    
    let csvContent = headers.join(',') + '\n';
    
    visibleRows.forEach(row => {
        const cells = Array.from(row.querySelectorAll('td')).map(cell => {
            // Извлекаем только текст, убираем HTML теги
            return '"' + cell.textContent.replace(/"/g, '""') + '"';
        });
        csvContent += cells.join(',') + '\n';
    });
    
    // Создаем и скачиваем файл
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'filtered_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация группированных таблиц
    const groupHeaders = document.querySelectorAll('.group-header');
    groupHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const groupClass = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            toggleGroup(groupClass);
        });
    });
    
    // Инициализация сортировки для обычных таблиц
    initTableSorting();
    
    console.log('Интерактивные таблицы инициализированы');
});

// Функция для сортировки таблиц
function initTableSorting() {
    const tables = document.querySelectorAll('.sphinx-datatable');
    
    tables.forEach(table => {
        const headers = table.querySelectorAll('thead th');
        
        headers.forEach((header, index) => {
            header.style.cursor = 'pointer';
            header.style.userSelect = 'none';
            header.title = 'Нажмите для сортировки';
            
            header.addEventListener('click', function() {
                sortTable(table, index);
            });
        });
    });
}

function sortTable(table, columnIndex) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr:not(.group-header)'));
    const isNumeric = isColumnNumeric(rows, columnIndex);
    const isAscending = table.getAttribute('data-sort-dir') !== 'asc';
    
    rows.sort((a, b) => {
        const aVal = getCellValue(a, columnIndex);
        const bVal = getCellValue(b, columnIndex);
        
        if (isNumeric) {
            return isAscending ? 
                parseFloat(aVal) - parseFloat(bVal) : 
                parseFloat(bVal) - parseFloat(aVal);
        } else {
            return isAscending ? 
                aVal.localeCompare(bVal, 'ru') : 
                bVal.localeCompare(aVal, 'ru');
        }
    });
    
    // Обновляем направление сортировки
    table.setAttribute('data-sort-dir', isAscending ? 'asc' : 'desc');
    
    // Обновляем индикатор сортировки в заголовке
    const headers = table.querySelectorAll('thead th');
    headers.forEach(h => h.classList.remove('sort-asc', 'sort-desc'));
    headers[columnIndex].classList.add(isAscending ? 'sort-asc' : 'sort-desc');
    
    // Переставляем строки
    rows.forEach(row => tbody.appendChild(row));
}

function getCellValue(row, columnIndex) {
    const cell = row.cells[columnIndex];
    return cell ? cell.textContent.trim() : '';
}

function isColumnNumeric(rows, columnIndex) {
    const sampleSize = Math.min(rows.length, 5);
    let numericCount = 0;
    
    for (let i = 0; i < sampleSize; i++) {
        const value = getCellValue(rows[i], columnIndex);
        const numericValue = parseFloat(value.replace(/[^\d.-]/g, ''));
        if (!isNaN(numericValue)) {
            numericCount++;
        }
    }
    
    return numericCount / sampleSize > 0.5;
}

// Утилиты для работы с таблицами
function highlightSearchTerms(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Экспорт функций для глобального использования
window.filterTable = filterTable;
window.filterTableByRange = filterTableByRange;
window.clearAllFilters = clearAllFilters;
window.toggleGroup = toggleGroup;
window.expandAllGroups = expandAllGroups;
window.collapseAllGroups = collapseAllGroups;
window.globalSearchTable = debounce(globalSearchTable, 300);
window.applyMultipleFilters = applyMultipleFilters;
window.selectAllFilters = selectAllFilters;
window.clearAllAdvancedFilters = clearAllAdvancedFilters;
window.exportFilteredData = exportFilteredData;