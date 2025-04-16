// Define conversion units and factors
interface ConversionUnit {
  name: string;
  factor: number;
  symbol?: string;
}

interface ConversionCategory {
  [key: string]: ConversionUnit[];
}

interface ConversionHistoryItem {
  id: string;
  category: string;
  fromValue: number;
  fromUnit: string;
  toValue: number;
  toUnit: string;
  timestamp: number;
}

const conversionUnits: ConversionCategory = {
  length: [
    { name: 'Meter', factor: 1, symbol: 'm' },
    { name: 'Kilometer', factor: 0.001, symbol: 'km' },
    { name: 'Centimeter', factor: 100, symbol: 'cm' },
    { name: 'Millimeter', factor: 1000, symbol: 'mm' },
    { name: 'Micrometer', factor: 1000000, symbol: 'µm' },
    { name: 'Nanometer', factor: 1000000000, symbol: 'nm' },
    { name: 'Mile', factor: 0.000621371, symbol: 'mi' },
    { name: 'Yard', factor: 1.09361, symbol: 'yd' },
    { name: 'Foot', factor: 3.28084, symbol: 'ft' },
    { name: 'Inch', factor: 39.3701, symbol: 'in' },
  ],
  temperature: [
    { name: 'Celsius', factor: 1, symbol: '°C' },
    { name: 'Fahrenheit', factor: 1, symbol: '°F' },
    { name: 'Kelvin', factor: 1, symbol: 'K' },
  ],
  area: [
    { name: 'Square Meter', factor: 1, symbol: 'm²' },
    { name: 'Square Kilometer', factor: 0.000001, symbol: 'km²' },
    { name: 'Square Centimeter', factor: 10000, symbol: 'cm²' },
    { name: 'Square Millimeter', factor: 1000000, symbol: 'mm²' },
    { name: 'Square Mile', factor: 3.861e-7, symbol: 'mi²' },
    { name: 'Square Yard', factor: 1.19599, symbol: 'yd²' },
    { name: 'Square Foot', factor: 10.7639, symbol: 'ft²' },
    { name: 'Square Inch', factor: 1550, symbol: 'in²' },
    { name: 'Acre', factor: 0.000247105, symbol: 'ac' },
    { name: 'Hectare', factor: 0.0001, symbol: 'ha' },
  ],
  volume: [
    { name: 'Cubic Meter', factor: 1, symbol: 'm³' },
    { name: 'Cubic Kilometer', factor: 1e-9, symbol: 'km³' },
    { name: 'Cubic Centimeter', factor: 1000000, symbol: 'cm³' },
    { name: 'Cubic Millimeter', factor: 1e+9, symbol: 'mm³' },
    { name: 'Liter', factor: 1000, symbol: 'L' },
    { name: 'Milliliter', factor: 1000000, symbol: 'mL' },
    { name: 'US Gallon', factor: 264.172, symbol: 'gal' },
    { name: 'US Quart', factor: 1056.69, symbol: 'qt' },
    { name: 'US Pint', factor: 2113.38, symbol: 'pt' },
    { name: 'US Cup', factor: 4226.75, symbol: 'cup' },
    { name: 'US Fluid Ounce', factor: 33814, symbol: 'fl oz' },
    { name: 'US Tablespoon', factor: 67628, symbol: 'tbsp' },
    { name: 'US Teaspoon', factor: 202884, symbol: 'tsp' },
  ],
  weight: [
    { name: 'Kilogram', factor: 1, symbol: 'kg' },
    { name: 'Gram', factor: 1000, symbol: 'g' },
    { name: 'Milligram', factor: 1000000, symbol: 'mg' },
    { name: 'Metric Ton', factor: 0.001, symbol: 't' },
    { name: 'Pound', factor: 2.20462, symbol: 'lb' },
    { name: 'Ounce', factor: 35.274, symbol: 'oz' },
    { name: 'Stone', factor: 0.157473, symbol: 'st' },
  ],
  time: [
    { name: 'Second', factor: 1, symbol: 's' },
    { name: 'Millisecond', factor: 1000, symbol: 'ms' },
    { name: 'Microsecond', factor: 1000000, symbol: 'µs' },
    { name: 'Nanosecond', factor: 1000000000, symbol: 'ns' },
    { name: 'Minute', factor: 1/60, symbol: 'min' },
    { name: 'Hour', factor: 1/3600, symbol: 'h' },
    { name: 'Day', factor: 1/86400, symbol: 'd' },
    { name: 'Week', factor: 1/604800, symbol: 'wk' },
    { name: 'Month (30 days)', factor: 1/2592000, symbol: 'mo' },
    { name: 'Year (365 days)', factor: 1/31536000, symbol: 'yr' },
  ],
  data: [
    { name: 'Byte', factor: 1, symbol: 'B' },
    { name: 'Kilobyte', factor: 1/1024, symbol: 'KB' },
    { name: 'Megabyte', factor: 1/1048576, symbol: 'MB' },
    { name: 'Gigabyte', factor: 1/1073741824, symbol: 'GB' },
    { name: 'Terabyte', factor: 1/1099511627776, symbol: 'TB' },
    { name: 'Petabyte', factor: 1/1125899906842624, symbol: 'PB' },
    { name: 'Bit', factor: 8, symbol: 'bit' },
    { name: 'Kilobit', factor: 8/1024, symbol: 'Kbit' },
    { name: 'Megabit', factor: 8/1048576, symbol: 'Mbit' },
    { name: 'Gigabit', factor: 8/1073741824, symbol: 'Gbit' },
  ],
  currency: [
    { name: 'US Dollar', factor: 1, symbol: 'USD' },
    { name: 'Euro', factor: 0.91, symbol: 'EUR' },
    { name: 'British Pound', factor: 0.78, symbol: 'GBP' },
    { name: 'Japanese Yen', factor: 149.66, symbol: 'JPY' },
    { name: 'Canadian Dollar', factor: 1.35, symbol: 'CAD' },
    { name: 'Australian Dollar', factor: 1.48, symbol: 'AUD' },
    { name: 'Swiss Franc', factor: 0.87, symbol: 'CHF' },
    { name: 'Chinese Yuan', factor: 7.18, symbol: 'CNY' },
    { name: 'Indian Rupee', factor: 82.91, symbol: 'INR' },
    { name: 'Brazilian Real', factor: 4.97, symbol: 'BRL' },
  ],
};

// Special case for temperature conversions
function convertTemperature(value: number, fromUnit: string, toUnit: string): number {
  // Convert from the source unit to Celsius
  let celsius: number;
  switch (fromUnit.toLowerCase()) {
    case 'celsius':
      celsius = value;
      break;
    case 'fahrenheit':
      celsius = (value - 32) * (5/9);
      break;
    case 'kelvin':
      celsius = value - 273.15;
      break;
    default:
      throw new Error(`Unknown temperature unit: ${fromUnit}`);
  }

  // Convert from Celsius to the target unit
  switch (toUnit.toLowerCase()) {
    case 'celsius':
      return celsius;
    case 'fahrenheit':
      return (celsius * (9/5)) + 32;
    case 'kelvin':
      return celsius + 273.15;
    default:
      throw new Error(`Unknown temperature unit: ${toUnit}`);
  }
}

// Function to convert between units
function convert(value: number, fromUnit: ConversionUnit, toUnit: ConversionUnit, category: string): number {
  if (category === 'temperature') {
    return convertTemperature(value, fromUnit.name, toUnit.name);
  }
  // For other conversions, use the standard formula
  return value * (fromUnit.factor / toUnit.factor);
}

// Function to get the formula explanation
function getConversionFormula(fromValue: number, fromUnit: ConversionUnit, toUnit: ConversionUnit, result: number, category: string): string {
  if (category === 'temperature') {
    if (fromUnit.name === 'Celsius' && toUnit.name === 'Fahrenheit') {
      return `Formula: (${fromValue}°C × 9/5) + 32 = ${result.toFixed(4)}°F`;
    }
    if (fromUnit.name === 'Fahrenheit' && toUnit.name === 'Celsius') {
      return `Formula: (${fromValue}°F - 32) × 5/9 = ${result.toFixed(4)}°C`;
    }
    if (fromUnit.name === 'Celsius' && toUnit.name === 'Kelvin') {
      return `Formula: ${fromValue}°C + 273.15 = ${result.toFixed(4)}K`;
    }
    if (fromUnit.name === 'Kelvin' && toUnit.name === 'Celsius') {
      return `Formula: ${fromValue}K - 273.15 = ${result.toFixed(4)}°C`;
    }
    if (fromUnit.name === 'Fahrenheit' && toUnit.name === 'Kelvin') {
      return `Formula: (${fromValue}°F - 32) × 5/9 + 273.15 = ${result.toFixed(4)}K`;
    }
    if (fromUnit.name === 'Kelvin' && toUnit.name === 'Fahrenheit') {
      return `Formula: (${fromValue}K - 273.15) × 9/5 + 32 = ${result.toFixed(4)}°F`;
    }
  } else if (category === 'data') {
    return `Formula: ${fromValue} ${fromUnit.symbol} × (${fromUnit.factor} / ${toUnit.factor}) = ${result.toFixed(4)} ${toUnit.symbol}`;
  } else if (category === 'currency') {
    return `Rate: 1 ${fromUnit.symbol} = ${(toUnit.factor / fromUnit.factor).toFixed(4)} ${toUnit.symbol}`;
  } else {
    return `Formula: ${fromValue} ${fromUnit.symbol} × (${fromUnit.factor} / ${toUnit.factor}) = ${result.toFixed(4)} ${toUnit.symbol}`;
  }
  return '';
}

// Function to populate the unit select elements
function populateUnitSelect(selectElement: HTMLSelectElement, units: ConversionUnit[], selectedValue?: string): void {
  selectElement.innerHTML = '';
  for (const unit of units) {
    const option = document.createElement('option');
    option.value = unit.name.toLowerCase();
    option.textContent = unit.name;
    if (selectedValue && unit.name.toLowerCase() === selectedValue.toLowerCase()) {
      option.selected = true;
    }
    selectElement.appendChild(option);
  }
}

// Function to load conversion history from localStorage
function loadConversionHistory(): ConversionHistoryItem[] {
  const historyJson = localStorage.getItem('conversionHistory');
  if (!historyJson) return [];
  try {
    return JSON.parse(historyJson) as ConversionHistoryItem[];
  } catch (error) {
    console.error('Error parsing conversion history from localStorage:', error);
    return [];
  }
}

// Function to save conversion history to localStorage
function saveConversionHistory(history: ConversionHistoryItem[]): void {
  localStorage.setItem('conversionHistory', JSON.stringify(history));
}

// Function to add a conversion to history
function addToHistory(item: ConversionHistoryItem, historyList: HTMLElement): void {
  const history = loadConversionHistory();
  // Keep only the latest 10 items
  history.unshift(item);
  if (history.length > 10) {
    history.pop();
  }
  saveConversionHistory(history);
  renderHistory(historyList);
}

// Function to render the conversion history
function renderHistory(historyList: HTMLElement): void {
  const history = loadConversionHistory();

  if (history.length === 0) {
    historyList.innerHTML = '<p class="empty-history">Your recent conversions will appear here</p>';
    return;
  }

  historyList.innerHTML = '';

  for (const item of history) {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';

    const fromUnitInfo = findUnitInfoByName(item.fromUnit, item.category);
    const toUnitInfo = findUnitInfoByName(item.toUnit, item.category);

    const fromSymbol = fromUnitInfo?.symbol || '';
    const toSymbol = toUnitInfo?.symbol || '';

    historyItem.innerHTML = `
      <div class="history-details">
        <div class="history-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</div>
        <div class="history-conversion">${item.fromValue} ${fromSymbol} = ${item.toValue.toFixed(6)} ${toSymbol}</div>
      </div>
      <div class="history-actions">
        <button class="history-use" data-id="${item.id}" title="Use this conversion">
          <i class="fas fa-arrow-up"></i>
        </button>
        <button class="history-delete" data-id="${item.id}" title="Remove from history">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;

    historyList.appendChild(historyItem);
  }

  // Add event listeners to history action buttons
  const useButtons = historyList.querySelectorAll('.history-use');
  for (const button of useButtons) {
    button.addEventListener('click', (e) => {
      const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
      if (!id) return;

      const item = history.find(h => h.id === id);
      if (!item) return;

      useHistoryItem(item);
    });
  }

  const deleteButtons = historyList.querySelectorAll('.history-delete');
  for (const button of deleteButtons) {
    button.addEventListener('click', (e) => {
      const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
      if (!id) return;

      const updatedHistory = history.filter(h => h.id !== id);
      saveConversionHistory(updatedHistory);
      renderHistory(historyList);
    });
  }
}

// Helper function to find unit info by name
function findUnitInfoByName(unitName: string, category: string): ConversionUnit | undefined {
  const units = conversionUnits[category];
  if (!units) return undefined;

  return units.find(u => u.name.toLowerCase() === unitName.toLowerCase());
}

// Function to use a history item for conversion
function useHistoryItem(item: ConversionHistoryItem): void {
  const tabButtons = document.querySelectorAll<HTMLButtonElement>('.tab-btn');
  const fromValueInput = document.getElementById('fromValue') as HTMLInputElement;
  const fromUnitSelect = document.getElementById('fromUnit') as HTMLSelectElement;
  const toUnitSelect = document.getElementById('toUnit') as HTMLSelectElement;

  // Update active tab
  for (const btn of tabButtons) {
    if (btn.getAttribute('data-category') === item.category) {
      btn.click(); // This will trigger the category change and UI update
    }
  }

  // Set values and units
  setTimeout(() => {
    fromValueInput.value = item.fromValue.toString();
    fromUnitSelect.value = item.fromUnit.toLowerCase();
    toUnitSelect.value = item.toUnit.toLowerCase();

    // Trigger conversion
    const event = new Event('input');
    fromValueInput.dispatchEvent(event);

    // Scroll to converter section
    document.querySelector('.converter-main')?.scrollIntoView({ behavior: 'smooth' });
  }, 100); // Small delay to ensure category change is complete
}

// Main functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get elements
  const app = document.getElementById('app');
  if (!app) return;

  const themeToggle = document.getElementById('themeToggle') as HTMLButtonElement;
  const tabButtons = document.querySelectorAll<HTMLButtonElement>('.tab-btn');
  const fromValueInput = document.getElementById('fromValue') as HTMLInputElement;
  const toValueInput = document.getElementById('toValue') as HTMLInputElement;
  const fromUnitSelect = document.getElementById('fromUnit') as HTMLSelectElement;
  const toUnitSelect = document.getElementById('toUnit') as HTMLSelectElement;
  const swapUnitsButton = document.getElementById('swapUnits') as HTMLButtonElement;
  const conversionFormulaElement = document.getElementById('conversionFormula') as HTMLParagraphElement;
  const conversionCards = document.querySelectorAll<HTMLDivElement>('.conversion-card');
  const converterLinks = document.querySelectorAll<HTMLAnchorElement>('.converter-category a');
  const historyList = document.getElementById('historyList') as HTMLDivElement;

  let currentCategory = 'length';

  // Initialize dark mode from user preference or localStorage
  function initTheme(): void {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark-mode');
    }
  }

  // Initialize theme
  initTheme();

  // Theme toggle functionality
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  // Function to update conversion
  function updateConversion(): void {
    const fromValue = Number.parseFloat(fromValueInput.value);
    if (Number.isNaN(fromValue)) {
      toValueInput.value = '';
      conversionFormulaElement.textContent = '';
      return;
    }

    const fromUnitName = fromUnitSelect.value;
    const toUnitName = toUnitSelect.value;

    const units = conversionUnits[currentCategory];
    const fromUnit = units.find(u => u.name.toLowerCase() === fromUnitName);
    const toUnit = units.find(u => u.name.toLowerCase() === toUnitName);

    if (!fromUnit || !toUnit) return;

    const result = convert(fromValue, fromUnit, toUnit, currentCategory);
    toValueInput.value = result.toFixed(6);

    conversionFormulaElement.textContent = getConversionFormula(fromValue, fromUnit, toUnit, result, currentCategory);

    // Add to history
    const historyItem: ConversionHistoryItem = {
      id: Date.now().toString(),
      category: currentCategory,
      fromValue,
      fromUnit: fromUnit.name.toLowerCase(),
      toValue: result,
      toUnit: toUnit.name.toLowerCase(),
      timestamp: Date.now()
    };

    addToHistory(historyItem, historyList);
  }

  // Initialize with default category
  function initializeCategory(category: string): void {
    currentCategory = category;
    const units = conversionUnits[category];

    populateUnitSelect(fromUnitSelect, units);
    populateUnitSelect(toUnitSelect, units);

    // Set default selections for common conversions
    if (category === 'length') {
      fromUnitSelect.value = 'meter';
      toUnitSelect.value = 'centimeter';
    } else if (category === 'temperature') {
      fromUnitSelect.value = 'celsius';
      toUnitSelect.value = 'fahrenheit';
    } else if (category === 'weight') {
      fromUnitSelect.value = 'kilogram';
      toUnitSelect.value = 'pound';
    } else if (category === 'data') {
      fromUnitSelect.value = 'gigabyte';
      toUnitSelect.value = 'megabyte';
    } else if (category === 'currency') {
      fromUnitSelect.value = 'us dollar';
      toUnitSelect.value = 'euro';
    }

    // Set default value to 1 if input is empty
    if (!fromValueInput.value) {
      fromValueInput.value = '1';
    }

    updateConversion();
  }

  // Initialize the app
  initializeCategory('length');

  // Initialize history
  renderHistory(historyList);

  // Event listeners
  fromValueInput.addEventListener('input', updateConversion);
  fromUnitSelect.addEventListener('change', updateConversion);
  toUnitSelect.addEventListener('change', updateConversion);

  // Swap units button
  swapUnitsButton.addEventListener('click', () => {
    const tempUnit = fromUnitSelect.value;
    fromUnitSelect.value = toUnitSelect.value;
    toUnitSelect.value = tempUnit;

    updateConversion();
  });

  // Tab buttons for changing categories
  for (const button of tabButtons) {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      if (!category || !conversionUnits[category]) return;

      // Update active tab
      for (const btn of tabButtons) {
        btn.classList.remove('active');
      }
      button.classList.add('active');

      // Change category
      initializeCategory(category);
    });
  }

  // Common conversion cards
  for (const card of conversionCards) {
    card.addEventListener('click', () => {
      const fromUnit = card.getAttribute('data-from');
      const toUnit = card.getAttribute('data-to');
      const category = card.getAttribute('data-category');

      if (!fromUnit || !toUnit || !category || !conversionUnits[category]) return;

      // Update active tab
      for (const btn of tabButtons) {
        if (btn.getAttribute('data-category') === category) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }

      // Change category and set units
      currentCategory = category;
      populateUnitSelect(fromUnitSelect, conversionUnits[category], fromUnit);
      populateUnitSelect(toUnitSelect, conversionUnits[category], toUnit);

      // Scroll to converter section
      document.querySelector('.converter-main')?.scrollIntoView({ behavior: 'smooth' });

      // Set focus and clear the input
      fromValueInput.value = '1';
      fromValueInput.focus();

      updateConversion();
    });
  }

  // Converter links in the all converters section
  for (const link of converterLinks) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.getAttribute('data-category');

      if (!category || !conversionUnits[category]) return;

      // Update active tab
      for (const btn of tabButtons) {
        if (btn.getAttribute('data-category') === category) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }

      // Change category
      initializeCategory(category);

      // Scroll to converter section
      document.querySelector('.converter-main')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
