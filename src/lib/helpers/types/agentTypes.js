/**
 * @typedef {Object} AgentWelcomeInfo
 * @property {string[]} messages - The welcome messages in Rich content format.
 */

/**
 * @typedef {Object} AgentTemplate
 * @property {string} name
 * @property {string} content
 */

/**
 * @typedef {Object} AgentLlmConfig
 * @property {boolean} is_inherit - Inherited from default Agent settings
 * @property {string?} provider 
 * @property {string?} model
 * @property {number} max_recursion_depth
 */


/**
 * @typedef {Object} RouterSettings
 * @property {string} planner
 */


/** 
 * @typedef {Object} AgentFilter
 * @property {import('$commonTypes').Pagination} pager - Pagination
 * @property {string} [type]
 * @property {boolean} [isPublic]
 * @property {boolean} [disabled]
 * @property {string[]} [agentIds]
 */

/**
 * @typedef {Object} AgentModel
 * @property {string} id - Agent Id.
 * @property {string} name - Agent name.
 * @property {string} description - Agent description.
 * @property {string} type - Agent type
 * @property {string} instruction - System prompt
 * @property {ChannelInstruction[]} channel_instructions - Channel instructions
 * @property {boolean} disabled
 * @property {boolean} is_public
 * @property {boolean} is_host
 * @property {boolean} allow_routing
 * @property {string} icon_url - Icon
 * @property {string[]} profiles - The agent profiles.
 * @property {string[]} utilities - The agent utilities.
 * @property {Date} created_datetime
 * @property {Date} updated_datetime
 * @property {AgentLlmConfig} llm_config - LLM settings.
 * @property {import('$pluginTypes').PluginDefModel} plugin
 * @property {FunctionDef[]} functions
 * @property {AgentTemplate[]} templates
 * @property {Object[]} responses
 * @property {RoutingRule[]} routing_rules
 * @property {AgentWelcomeInfo} welcome_info - Welcome information.
 * @property {boolean} editable
 */


/**
 * @typedef {Object} AgentSettings
 * @property {string} dataDir
 * @property {string} templateFormat
 * @property {AgentLlmConfig} llmConfig - LLM settings.
 */

/** 
 * @typedef {Object} AgentTaskFilter
 * @property {import('$commonTypes').Pagination} pager - Pagination
 * @property {string} [agentId] - The agent id.
 */

/**
 * @typedef {Object} AgentTaskModel
 * @property {string} id - Task id.
 * @property {string} name - Task name.
 * @property {string} description - Description.
 * @property {string} content - Task detail.
 * @property {boolean} enabled
 * @property {Date} created_datetime
 * @property {Date} updated_datetime
 * @property {string} agent_id - Description.
 * @property {string} agent_name - Task detail.
 * @property {string} [direct_agent_id] - Run task directly in this agent.
 */

/**
 * @typedef {Object} ChannelInstruction
 * @property {string} channel 
 * @property {string} instruction
 */

/**
 * @typedef {Object} RoutingRule
 * @property {string} type
 * @property {string} field
 * @property {string} description
 * @property {string} fieldType
 * @property {boolean} required
 * @property {string} redirectTo
 * @property {string?} [redirect_to_agent]
 */


/**
 * @typedef {Object} FunctionDef
 * @property {string} name 
 * @property {string} description
 */


export default {};